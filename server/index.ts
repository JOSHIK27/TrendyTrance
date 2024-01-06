import express from "express";
import userRouter from "./routes/user";
import mongoose, { mongo } from "mongoose";
import { users } from "./db/schema";
import cors from "cors";
const app = express();

app.use(function(req, res, next) {
    console.log('CORS middleware applied');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("listening");
});

mongoose.connect(
  "mongodb+srv://JOSHIK:uVMVjfzYFR0ti1C5@cluster0.yg4wtr8.mongodb.net"
,{dbName: 'TRENDYTRANCE'});
