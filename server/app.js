import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index.js";

dotenv.config();

const app = express();
const router = express.Router();
const CONNECTION_URL = process.env.ATLAS_URL;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send("App is working...");
  } catch (error) {
    console.error("error", error);
  }
});
app.use("/", routes);

app.use((err, req, res, next) => {
  const messae = err.messae || "Something went wrong.";
  const status = err.status || 500;
  res.status(status).json({ messae, status, success: false, stack: err.stack });
  next();
});

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(5005, () => console.log("App is listening at port ", 5005))
  )
  .catch((e) => console.log("Error in Mongodb Connection ", e));
