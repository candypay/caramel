import { z } from "zod";

const JWTPayloadSchema = z.object({
  package_id: z.string(),
  exp: z.number(),
});

export type JWTPayload = z.infer<typeof JWTPayloadSchema>;
export { JWTPayloadSchema };
