import express from "express";
import { createJwt, authJwt } from "../middlewares/auth";
import { users } from "../db/schema";
const userRouter = express.Router();

userRouter.use(express.json());


userRouter.post("/signup", createJwt, (req, res) => {
  const { user, password } = req.body;
  console.log(req.body);
  users.create({email: user, password, products : [{
    imageUrl : "",
    itemCount: 0
  }]}).then((resp) => {
    console.log("added to db");
    res.json(req.body.token);
  })
});

userRouter.post("/login", createJwt,(req, res) => {
  const {user, password} = req.body;
  users.find({email: user, password}).then((resp) => {
    console.log(resp);
    if(resp.length != 0) {
      console.log("success");
      return res.json([req.body.token, resp[0]._id, resp]);
    }
    return res.json(["auth failed"]);
  })
})

userRouter.post("/test", authJwt, (req, res) => {
  res.send("authentication success");
});

userRouter.post("/cart", (req, res) => {
  console.log(req.body);
  const {id, imageUrl} = req.body;
  users.findById(id).then((resp) => {
    const products = resp?.products
    let check = false;
    products?.forEach((x) => {
      if(x.imageUrl === imageUrl) {
        check = true
        if(x.itemCount) x.itemCount = x.itemCount + 1;
      }
    })
    if(!check) resp?.products.push({imageUrl, itemCount: 1})
    const query = {_id: id}
    if(resp) {
      users.findOneAndUpdate(query, resp, {new: true}).then((x) => {
        console.log(x)
;        res.json(x);
      })
    }
  })

})

export default userRouter;
