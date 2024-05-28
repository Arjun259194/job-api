import cors from "cors";
import express from "express";
import authRouter from "./route/auth";
import cookieParser from "cookie-parser";
import userRouter from "./route/user";

const PORT = process.env.PORT ?? 8080;

let app = express()
  .use(express.json())
  .use(cookieParser())
  .use(cors())
  .use("/auth", authRouter)
  .use("/user", userRouter);

app.get("/", (_, res) => res.status(200).json({ ok: "done" }));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
