import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
const SECRET = "lpu";
const user = {
  name: "John Doe",
  email: "john@example.com",
  role: "student",
};
const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
console.log("Generated Token:", token);

