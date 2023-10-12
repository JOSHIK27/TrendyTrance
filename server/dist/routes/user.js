"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const userRouter = express_1.default.Router();
userRouter.use(express_1.default.json());
userRouter.get("/login", (req, res) => {
    res.send("hi from user router");
});
userRouter.post("/signup", auth_1.createJwt, (req, res) => {
    const { email, password } = req.body;
    res.send("success");
});
userRouter.post("/test", auth_1.authJwt, (req, res) => {
    res.send("authentication success");
});
exports.default = userRouter;
