
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import noteRouter from "./routes/note.js"
import authRouter from "./routes/auth.js"
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    // origin: "*",
    credentials: true,
    origin: true,
    "Access-Control-Allow-Origin": "*",
  })
);
app.options("*", cors());
app.use("/",noteRouter)
app.use("/auth",authRouter)
/*-----------------databaseConnection-------------------------*/
const PORT = 8000;
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/NoteList")
  .then(() =>
    app.listen(PORT, () => console.log(`Server running successfuly : ${PORT}`))
  )
  .catch((error) => {
    console.log(error.message);
  });