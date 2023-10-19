import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

export const users = mongoose.model("users", userSchema);
