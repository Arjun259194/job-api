import { makePostEndpoint } from "../utils";
import prisma from "../database";
import jwt from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import { loginReqSchema, registerReqSchema } from "../schema";
import { UserByEmail } from "../database/user";

export const register = makePostEndpoint(
  registerReqSchema,
  async (req, res) => {
    let body = req.body;

    let searchResult = await UserByEmail(body.email);

    if (!!searchResult)
      return res.status(409).json({ message: "User existing" });

    let { password, ...user } = await prisma.user.create({
      data: {
        ...body,
        password: await hash(body.password, 10),
      },
    });

    return res.status(200).json({ status: "User Registered", data: user });
  },
);

export const login = makePostEndpoint(loginReqSchema, async (req, res) => {
  let body = req.body;

  let user = await UserByEmail(body.email);
  if (!user) return res.status(404).json({ message: "User not found" });

  let isAuth = await compare(body.password, user.password);
  if (!isAuth) return res.status(401).json({ message: "User not authorized" });

  let token = jwt.sign(user.id, "secret");

  return res
    .cookie("auth", token, { httpOnly: true })
    .status(200)
    .json({ message: "User logged in", token: token });
});
