import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb initial connection successfull");
  })
  .catch((error) => {
    console.log(`Error found ${error}`);
  });
app.listen(3000, () => {
  console.log(`Server is listening on port 3000!`);
});

app.get("/test", (req, res) => {
  res.json({ message: "this is test message" });
});

app.use("/api/user", userRouter); // this is used to use the created userRoute.
