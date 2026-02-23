import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzg2MiwiZXhwIjoxNzcxODM3NDYyfQ.aY3-QMYAvbK1wnSIZgWva7JdcUQCA5wVvZFMkZ87OZk";
const SECRET = "lpu";
const user = jwt.verify(token, SECRET);
console.log("Decoded User:", user);