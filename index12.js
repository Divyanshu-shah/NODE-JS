//router
import express from "express";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
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