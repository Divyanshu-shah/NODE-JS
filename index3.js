import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.get("/home", (req, res) => {
  res.send("This is the home page");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
