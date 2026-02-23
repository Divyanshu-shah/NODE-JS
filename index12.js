//router

import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
}); 
const userRouter = express.Router();
const productRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("This is get request for users");
});
userRouter.post("/", (req, res) => {
  res.send("This is post request for users");
});
productRouter.get("/", (req, res) => {
  res.send("This is get request for products");
});
productRouter.post("/", (req, res) => {
  res.send("This is post request for products");
});
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
























// let users= [];
// let products = [];

// app.post("/users");
// app.get("/users");
// app.delete("/users/:id");

// app.post("/products");
// app.get("/products");
// app.delete("/products/:id");