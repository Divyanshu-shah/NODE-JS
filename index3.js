import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

app.get("/home", (req, res) => {
  res.send("This is the home page");
});

app.get("/home/page1", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.body);
  console.log(req.headers.authorization);  
  res.send("This is page 1");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
