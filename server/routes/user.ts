import express from "express";
import { createJwt, authJwt } from "../middlewares/auth";
const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/login", (req, res) => {
  res.send("hi from user router");
});

userRouter.post("/signup", createJwt, (req, res) => {
  const { email, password } = req.body;
  res.send("success");
});

userRouter.post("/test", authJwt, (req, res) => {
  res.send("authentication success");
});

export default userRouter;
