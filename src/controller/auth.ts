import { z } from "zod";
import { makePostEndpoint } from "../utils";

const registerReqSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const register = makePostEndpoint(registerReqSchema, (req, res) => {
  let body = req.body;
  return res.status(200).json(body);
});
