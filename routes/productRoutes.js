import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
});
const productRouter = express.Router();
productRouter.get("/", (req, res) => {
  res.send("This is get request for products");
});
productRouter.post("/", (req, res) => {
  res.send("This is post request for products");
});
app.use("/api/products", productRouter);