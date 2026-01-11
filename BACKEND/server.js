const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const inquiryRoutes = require("./routes/inquiryRoute");

const app = express();

// --- UPDATED MIDDLEWARE ---
// This allows your Vercel frontend to talk to this AWS backend
const allowedOrigins = [
  "http://localhost:3000",
  "https://wallabyitservices.com.au", // Your local frontend during dev
  "http://3.107.183.213",
  // REPLACE THIS with your actual Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

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
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
