import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/database.js";
import userRoutes from "./routes/userRoute.js";
import errorHandling from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cors());

//  Routes
app.use("/api", userRoutes);

//  Error handling middleware
app.use(errorHandling);

app.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`The Database name is ${result.rows[0].current_database}`);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
