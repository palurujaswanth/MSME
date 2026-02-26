require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./db");
require("./firebase");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("MSME Backend Running");
});

app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});