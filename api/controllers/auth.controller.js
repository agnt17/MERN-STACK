import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  // this is done to save the data from the api route to the database
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); // using this passsword get encrypted
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
