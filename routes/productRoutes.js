import express from "express";
const productRouter = express.Router();
productRouter.get("/", (req, res) => {
  res.send("This is get request for products");
});
productRouter.post("/", (req, res) => {
  res.send("This is post request for products");
});
export default productRouter;