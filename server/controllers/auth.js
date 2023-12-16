import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const SignIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(404).json({message:"User was not found"});
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "invalidCredentials" });
    }
    const token=jwt.sign({id:existingUser._id},"middlewareToken",{expiresIn:"1h"});
    res.status(200).json({result:existingUser,token})
  } catch (error) {
    res.status(500).json(error);
  }
};
