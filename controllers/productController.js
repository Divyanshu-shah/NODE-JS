import { products } from "../models/productModel.js";
export const getProducts = (req, res) => {
  res.json(products);
};

export const createProduct = (req, res) => {
  res.send("This is post request for products");
};