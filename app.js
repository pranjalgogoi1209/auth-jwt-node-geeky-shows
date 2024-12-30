import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 80;

// middlewares
app.use(cors());
app.use(express.json());

// db
connectDB(process.env.DB_URL);

// routes

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
