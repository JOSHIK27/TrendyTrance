import express from "express";
import userRouter from "./routes/user";
import mongoose, { mongo } from "mongoose";
import { users } from "./db/schema";
const app = express();

app.use("/user", userRouter);

app.get("/", (req, res) => {
  users
    .create({
      email: "joshikroshan4021@gmail.com",
      password: "abcde",
    })
    .then(() => {
      res.send("successfully added to database collection");
    });
});

app.listen(3000, () => {
  console.log("listening");
});

mongoose.connect(
  "mongodb+srv://joshik21:%40Birami1@cluster0.gau2y9q.mongodb.net/TRENDYTRANCE"
);
