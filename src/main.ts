import cors from "cors";
import express from "express";
import authRouter from "./route/auth";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use("/", authRouter);

app.use(cors());

app.listen(PORT, () => {
   console.log(`Server running on port: ${PORT}`);
});
