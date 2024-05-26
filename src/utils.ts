import { Request, Response } from "express";
import z from "zod";

export function makePostEndpoint<TBody>(
  schema: z.Schema<TBody>,
  callback: (req: Request<any, any, TBody>, res: Response) => void,
) {
  return (req: Request, res: Response) => {
    try {
      const bodyRes = schema.safeParse(req.body);
      if (!bodyRes.success) {
        return res.status(400).json({
          message: "Bad Request",
        });
      }
    } catch (error) {
      console.error("Error in endpoint: ", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
