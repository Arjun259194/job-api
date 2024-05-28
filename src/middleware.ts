import { NextFunction, Request, Response } from "express";
import { getToken } from "./utils";

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let token = getToken(req);
  if (!token) return res.status(401).json({ message: "User Not Authorized" });
  next();
}
