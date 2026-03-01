import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chatRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRoute);

// Health check route
app.get("/", (req, res) => {
  res.send("MSME AI Chat Service is running 🚀");
});

// Start server
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`🚀 AI Chat Service running on port ${PORT}`);
});