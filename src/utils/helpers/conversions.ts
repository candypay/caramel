import { deflate } from "pako";

interface IPayload {
  session_id?: string;
  package_id: string;
}

const PayloadToBase64 = (payload: IPayload) => {
  const compressed = deflate(JSON.stringify(payload));
  const base64 = Buffer.from(compressed).toString("base64");
  return encodeURIComponent(base64);
};

export { PayloadToBase64 };
export type { IPayload };
