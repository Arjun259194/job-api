import { Router } from "express";
import { AuthMiddleware } from "../middleware";
import { User } from "@prisma/client";

const userRouter = Router().use(AuthMiddleware);

userRouter.get("/", async (_, res) => {
  return res.status(200).json({ message: "user route working" });
});

export default userRouter;
