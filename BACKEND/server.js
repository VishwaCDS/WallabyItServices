const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const inquiryRoutes = require("./routes/inquiryRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/inquiry", inquiryRoutes);

// Basic Health Check Route
app.get("/", (req, res) => {
  res.send("Wallaby IT Services API is running...");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
