"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const schema_1 = require("../db/schema");
const zod_1 = require("zod");
const userRouter = express_1.default.Router();
userRouter.use(express_1.default.json());
const loginSchema = zod_1.z.object({
    user: zod_1.z.string().email().trim(),
    password: zod_1.z.string().min(1).max(10).trim()
});
userRouter.post("/signup", auth_1.createJwt, (req, res) => {
    const { user, password } = req.body;
    const output = loginSchema.safeParse(req.body);
    if (output.success) {
        schema_1.users.create({ email: user, password, products: [{
                    imageUrl: "",
                    itemCount: 0
                }] }).then((resp) => {
            console.log("added to db");
            res.json(req.body.token);
        });
    }
    else {
        res.json(["NOT ALLOWED"]);
    }
});
userRouter.post("/login", auth_1.createJwt, (req, res) => {
    const { user, password } = req.body;
    const output = loginSchema.safeParse(req.body);
    console.log(output);
    if (output.success) {
        schema_1.users.find({ email: user, password }).then((resp) => {
            if (resp.length != 0) {
                return res.json([req.body.token, resp[0]._id, resp]);
            }
            return res.json(["auth failed"]);
        });
    }
    else {
        res.json(["ENTER A VALID INPUT"]);
    }
});
userRouter.post("/test", auth_1.authJwt, (req, res) => {
    res.send("authentication success");
});
userRouter.post("/cart", auth_1.authJwt, (req, res) => {
    const { id, imageUrl } = req.body;
    schema_1.users.findById(id).then((resp) => {
        const products = resp === null || resp === void 0 ? void 0 : resp.products;
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
                res.json(x);
            });
        }
    });
});
userRouter.get('/', (req, res) => {
    schema_1.users.find().then((resp) => {
        res.json(resp).status(200);
    });
});
userRouter.post('/increment', (req, res) => {
    const { id, url } = req.body;
    console.log(id, url);
    schema_1.users.findById(id).then((resp) => {
        const n = resp === null || resp === void 0 ? void 0 : resp.products.length;
        if (n != undefined) {
            for (let i = 0; i < n; i++) {
                const m = resp.products[i].itemCount;
                if (m != undefined && (resp === null || resp === void 0 ? void 0 : resp.products[i].imageUrl) === url) {
                    resp.products[i].itemCount = m + 1;
                    console.log("hii");
                }
            }
            const query = { _id: id };
            if (resp) {
                schema_1.users.findOneAndUpdate(query, resp, { new: true }).then((x) => {
                    console.log(x);
                    res.json(x);
                });
            }
        }
    });
});
userRouter.post('/decrement', (req, res) => {
    const { id, url } = req.body;
    console.log(id, url);
    schema_1.users.findById(id).then((resp) => {
        const n = resp === null || resp === void 0 ? void 0 : resp.products.length;
        if (n != undefined) {
            for (let i = 0; i < n; i++) {
                const m = resp.products[i].itemCount;
                if (m != undefined && (resp === null || resp === void 0 ? void 0 : resp.products[i].imageUrl) === url && m != 0) {
                    resp.products[i].itemCount = m - 1;
                    console.log("hii");
                }
            }
            const query = { _id: id };
            if (resp) {
                schema_1.users.findOneAndUpdate(query, resp, { new: true }).then((x) => {
                    console.log(x);
                    res.json(x);
                });
            }
        }
    });
});
exports.default = userRouter;
