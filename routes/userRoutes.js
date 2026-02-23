import express from "express";
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.send("This is get request for users");
});
userRouter.post("/", (req, res) => {
  res.send("This is post request for users");
});
export default userRouter;