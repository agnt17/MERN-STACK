import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(()=>{console.log("Mongodb initial connection successfull")}).catch((error) => {console.log(`Error found ${error}`)})
app.listen(3000, () => {
  console.log(`Server is listening on port 3000!`);
});
