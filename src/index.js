import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

// Middlewares
app.use(express.json());
app.use(cors());

//  Routes

//  Error handling middleware

//  Server running
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
