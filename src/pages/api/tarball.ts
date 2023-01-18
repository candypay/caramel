import { packages } from "@/lib/constants/packages";
import { prisma } from "@/lib/init/prisma";
import axios from "axios";
import base64url from "base64url";
import { NextApiHandler } from "next";
import pako from "pako";
import { extractLongTokenHash } from "prefixed-api-key";

interface IPayload {
  package_id: string;
  session_id?: string;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { authorization } = req.headers;
    console.log(authorization);

    const { data, version } = req.query;

    try {
      if (!data) {
        return res.status(400).json({
          error: "Missing encoded data",
        });
      }

      const tokenHash = extractLongTokenHash(
        (authorization as string).substring(7)
      );

      const doesExist = await prisma.tokens.findUnique({
        where: {
          token: tokenHash,
        },
      });

      if (!doesExist) {
        return res.status(401).json({
          error: "Unauthorized",
        });
      }

      const payload: IPayload = JSON.parse(
        pako.inflate(base64url.toBuffer(data as string), {
          to: "string",
        })
      );

      if (!payload.package_id) {
        return res.status(400).json({
          error: "Missing package ID",
        });
      }

      const packageName = packages[payload.package_id].package_name;

      const registryResponse = await axios.get(
        `https://npm.pkg.github.com/${packageName}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        }
      );

      const versionToBeInstalled = registryResponse.data["dist-tags"].latest;
      const tarballUrl =
        registryResponse.data.versions[versionToBeInstalled].dist.tarball;

      const tarballResponse = await axios.get(tarballUrl, {
        responseType: "stream",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });

      res.setHeader("Content-Type", "application/octet-stream");
      res.setHeader("Content-Disposition", "attachment; filename=repo.tar.gz");

      tarballResponse.data.pipe(res);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
