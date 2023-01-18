import { JWTPayload } from "@/typings/jwt-payload";
import jwt from "jsonwebtoken";

const genJwt = (payload: JWTPayload) => {
  const { JWT_SECRET } = process.env;

  const token = jwt.sign(payload, JWT_SECRET as string);

  return token;
};

export { genJwt };
