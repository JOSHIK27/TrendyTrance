import express from "express";
import userRouter from "./routes/user";
const app = express();

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("listening");
});
