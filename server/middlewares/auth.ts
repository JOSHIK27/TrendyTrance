import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const secretKey = "This is the server side key";

export const createJwt = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const payload = `${email}|${password}`;
  const token = jwt.sign({ payload: payload }, secretKey, { expiresIn: "1h" });
  console.log(token);
  req.body.token = token;
  next();
};

export const authJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;
  let token = "";
  if (authHeaders) {
    token = authHeaders.split(" ")[1];
  }
  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      res.send("You are unauthorised").status(404);
    } else {
      next();
    }
  });
};
