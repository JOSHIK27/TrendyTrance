"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const schema_1 = require("../db/schema");
const userRouter = express_1.default.Router();
userRouter.use(express_1.default.json());
userRouter.get("/login", (req, res) => {
    res.send("hi from user router");
});
userRouter.post("/signup", auth_1.createJwt, (req, res) => {
    const { user, password } = req.body;
    console.log(req.body);
    schema_1.users.create({ email: user, password, products: [{
                imageUrl: "",
                itemCount: 0
            }] }).then((resp) => {
        console.log("added to db");
        res.json(req.body.token);
    });
});
userRouter.post("/login", auth_1.createJwt, (req, res) => {
    const { user, password } = req.body;
    schema_1.users.find({ email: user, password }).then((resp) => {
        console.log(resp);
        if (resp.length != 0) {
            console.log("success");
            return res.json([req.body.token, resp[0]._id]);
        }
        return res.json(["auth failed"]);
    });
});
userRouter.post("/test", auth_1.authJwt, (req, res) => {
    res.send("authentication success");
});
userRouter.post("/cart", (req, res) => {
    console.log(req.body);
    const { id, imageUrl } = req.body;
    schema_1.users.findById(id).then((resp) => {
        const products = resp === null || resp === void 0 ? void 0 : resp.products;
        console.log(resp);
        let check = false;
        products === null || products === void 0 ? void 0 : products.forEach((x) => {
            if (x.imageUrl === imageUrl) {
                check = true;
                if (x.itemCount)
                    x.itemCount = x.itemCount + 1;
            }
        });
        if (!check)
            resp === null || resp === void 0 ? void 0 : resp.products.push({ imageUrl, itemCount: 1 });
        const query = { _id: id };
        if (resp) {
            schema_1.users.findOneAndUpdate(query, resp, { new: true }).then((x) => {
                console.log(x);
                res.send("sucessfully added to cart");
            });
        }
    });
});
exports.default = userRouter;
