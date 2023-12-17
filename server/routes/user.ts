import express from "express";
import { createJwt, authJwt } from "../middlewares/auth";
import { users } from "../db/schema";
import {z} from "zod";
const userRouter = express.Router();
userRouter.use(express.json());

const loginSchema = z.object({
  user: z.string().email().trim(),
  password: z.string().min(1).max(10).trim()
})

userRouter.post("/signup", createJwt, (req, res) => {
  const { user, password } = req.body;
  const output = loginSchema.safeParse(req.body);
  if(output.success) {
    users.create({email: user, password, products : [{
      imageUrl : "",
      itemCount: 0
    }]}).then((resp) => {
      console.log("added to db");
      res.json(req.body.token);
    })
  }
  else {
    res.json(["NOT ALLOWED"]);
  }
});

userRouter.post("/login", createJwt,(req, res) => {
  const {user, password} = req.body;
  const output = loginSchema.safeParse(req.body);
  console.log(output);
  if(output.success) {
    users.find({email: user, password}).then((resp) => {
      if(resp.length != 0) {
        return res.json([req.body.token, resp[0]._id, resp]);
      }
      return res.json(["auth failed"]);
    })
  }
  else {
    res.json(["ENTER A VALID INPUT"]);
  }
})

userRouter.post("/test", authJwt, (req, res) => {
  res.send("authentication success");
});

userRouter.post("/cart",authJwt, (req, res) => {
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
        console.log(x);
        res.json(x);
      })
    }
  })
})

userRouter.get('/', (req, res) => {
  users.find().then((resp) => {
    res.json(resp).status(200);
  })
})

userRouter.post('/increment', (req, res) => {
  const {id, url} = req.body;
  console.log(id, url);
  users.findById(id).then((resp) => {
    const n = resp?.products.length;
    if(n != undefined) {
      for(let i = 0; i < n; i++) {
        const m = resp!.products[i].itemCount;
        if(m != undefined && resp?.products[i].imageUrl === url) {
          resp!.products[i].itemCount = m+1;
          console.log("hii");
        }
      }
      const query = {_id : id};
      if(resp) {
        users.findOneAndUpdate(query, resp, {new: true}).then((x) => {
          console.log(x);
          res.json(x);
        })
      }
    }
  })
})

userRouter.post('/decrement', (req, res) => {
  const {id, url} = req.body;
  console.log(id, url);
  users.findById(id).then((resp) => {
    const n = resp?.products.length;
    if(n != undefined) {
      for(let i = 0; i < n; i++) {
        const m = resp!.products[i].itemCount;
        if(m != undefined && resp?.products[i].imageUrl === url && m !=0) {
          resp!.products[i].itemCount = m-1;
          console.log("hii");
        }
      }
      const query = {_id : id};
      if(resp) {
        users.findOneAndUpdate(query, resp, {new: true}).then((x) => {
          console.log(x);
          res.json(x);
        })
      }
    }
  })
})



export default userRouter;
