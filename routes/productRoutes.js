import express from "express";
const productRouter = express.Router();
import { getProducts, createProduct } from "../controllers/productController.js";
productRouter.get("/",getProducts);
productRouter.post("/", createProduct);
export default productRouter;