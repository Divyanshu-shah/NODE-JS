import { users } from "../models/userModel.js";
export const getUsers = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  res.send("This is post request for users");
};