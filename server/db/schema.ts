import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  products : [{
    imageUrl : String,
    itemCount: Number
  }]
});


export const users = mongoose.model("users", userSchema);

