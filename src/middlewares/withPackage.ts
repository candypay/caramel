import { APP_URL } from "@/lib/constants/urls";
import { prisma } from "@/lib/init/prisma";
import { JWTPayloadSchema } from "@/typings/jwt-payload";
import { PayloadToBase64 } from "@/utils/helpers/conversions";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
import { generateAPIKey } from "prefixed-api-key";

const withSuccess = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;
  try {
    const { data, session_id } = query;

    const decoded = JWTPayloadSchema.parse(
      jwt.verify(data as string, process.env.JWT_SECRET as string)
    );

    if (decoded.exp < Date.now()) {
      throw new TokenExpiredError("token expired", new Date(decoded.exp));
    }

    const token = await generateAPIKey({
      keyPrefix: "np",
    });

    await prisma.tokens.create({
      data: {
        token: token.longTokenHash as string,
        session_id: session_id as string,
      },
    });

    const base64 = PayloadToBase64({
      session_id: session_id as string,
      package_id: decoded.package_id as string,
    });

    const url = `${APP_URL}/api/tarball?data=${base64}`;

    return {
      props: {
        token: token.longToken,
        installation_url: url,
      },
    };
  } catch (error) {
    console.log(error);
    if (error instanceof TokenExpiredError) {
      return {
        props: {
          isExpired: true,
        },
      };
    }

    return {
      props: {
        isInvalid: true,
      },
    };
  }
};

export { withSuccess };
