import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const DB_URI = process.env.DB_URI;

const connection = mongoose.connect(DB_URI);

export default connection;
