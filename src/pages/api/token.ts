import { NextApiHandler } from "next";
import { generateAPIKey } from "prefixed-api-key";
import jwt, { JwtPayload } from "jsonwebtoken";

import { prisma } from "@/lib/init/prisma";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { authorization } = req.headers;
    const { session_id } = req.body;

    if (!authorization) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    if (!session_id) {
      return res.status(400).json({
        error: "Missing session ID",
      });
    }

    const payload = jwt.verify(
      authorization,
      process.env.JWT_SECRET
    ) as JwtPayload;

    if (Date.now() - payload.exp > 60000 * 10) {
      return res.status(400).json({
        error: "Expired JWT",
      });
    }

    const token = await generateAPIKey();

    await prisma.tokens.create({
      data: {
        token: token.longTokenHash,
        session_id,
      },
    });

    return res.status(200).json({
      token: token.longToken,
    });
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
