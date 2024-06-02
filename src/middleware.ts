import { NextFunction, Request, Response } from "express";
import { getToken } from "./utils";

export default async function AuthMiddleware(
   req: Request,
   res: Response,
   next: NextFunction,
): Promise<Response<any, Record<string, any>> | undefined> {
   let token = getToken(req);
   if (!token) return res.status(401).json({ message: "User Not Authorized" });
   next();
}
