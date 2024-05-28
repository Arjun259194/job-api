import z from "zod";

export const registerReqSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginReqSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
