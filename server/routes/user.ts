import express from "express";

const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/login", (req, res) => {
  res.send("hi from user router");
});

userRouter.post("/signup", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("success");
});

export default userRouter;
