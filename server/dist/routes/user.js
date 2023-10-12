"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.use(express_1.default.json());
userRouter.get("/login", (req, res) => {
    res.send("hi from user router");
});
userRouter.post("/signup", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("success");
});
exports.default = userRouter;
