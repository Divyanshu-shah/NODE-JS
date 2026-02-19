// http://localhost:8080/4/5

import express from "express";
const app = express();
app.get("/:num1/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  res.send(`Sum: ${num1 + num2}`);
});
app.listen(8080, () => console.log("Server started"));


// http://localhost:8080/x/y
import express from "express";
const app = express();
app.get("/x/y", (req, res) => {
  res.send("Route matched: /x/y");
});
app.listen(8080, () => console.log("Server started"));


// http://localhost:8080/a/4/b/5/c/4

import express from "express";
const app = express();
app.get("/a/:num1/b/:num2/c/:num3", (req, res) => {
  const n1 = Number(req.params.num1);
  const n2 = Number(req.params.num2);
  const n3 = Number(req.params.num3);
  res.send(`Sum: ${n1 + n2 + n3}`);
});
app.listen(8080, () => console.log("Server started"));


// http://localhost:8080/x/4/y/5/z/4

import express from "express";
const app = express();
app.get("/x/:x/y/:y/z/:z", (req, res) => {
  const x = Number(req.params.x);
  const y = Number(req.params.y);
  const z = Number(req.params.z);
  res.send(`Sum: ${x + y + z}`);
});
app.listen(8080, () => console.log("Server started"));


// http://localhost:8080/a/b/c/d

import express from "express";
const app = express();
app.get("/a/b/c/d", (req, res) => {
  res.send("Hello World");
});
app.listen(8080, () => console.log("Server started"));
