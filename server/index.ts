import express from "express";
import userRouter from "./routes/user";
import mongoose, { mongo } from "mongoose";
import { users } from "./db/schema";
import cors from "cors";
const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));



app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("listening");
});

mongoose.connect(
  "mongodb+srv://JOSHIK:uVMVjfzYFR0ti1C5@cluster0.yg4wtr8.mongodb.net"
,{dbName: 'TRENDYTRANCE'});
