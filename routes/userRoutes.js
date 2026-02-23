import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
});
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.send("This is get request for users");
});
userRouter.post("/", (req, res) => {
  res.send("This is post request for users");
});
app.use("/api/users", userRouter);