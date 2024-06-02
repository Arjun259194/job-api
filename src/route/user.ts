import { Router } from "express";
import AuthMiddleware from "../middleware";

const userRouter = Router().use(AuthMiddleware);


export default userRouter;
