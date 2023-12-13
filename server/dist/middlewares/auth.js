"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJwt = exports.createJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "This is the server side key";
const createJwt = (req, res, next) => {
    const { email, password } = req.body;
    const payload = `${email}|${password}`;
    const token = jsonwebtoken_1.default.sign({ payload: payload }, secretKey, { expiresIn: "1h" });
    console.log(token);
    req.body.token = token;
    next();
};
exports.createJwt = createJwt;
const authJwt = (req, res, next) => {
    const authHeaders = req.headers.authorization;
    console.log(authHeaders);
    let token = "";
    if (authHeaders) {
        token = authHeaders.split(" ")[1];
        console.log(token);
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, payload) => {
        if (err) {
            res.json({ auth: "YOU ARE UNAUTHORISED" });
        }
        else {
            next();
        }
    });
};
exports.authJwt = authJwt;
