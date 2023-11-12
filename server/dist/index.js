"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = require("./db/schema");
const app = (0, express_1.default)();
app.use("/user", user_1.default);
app.get("/", (req, res) => {
    schema_1.users
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
mongoose_1.default.connect("mongodb+srv://JOSHIK:uVMVjfzYFR0ti1C5@cluster0.yg4wtr8.mongodb.net", { dbName: 'TRENDYTRANCE' });
