const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry"); // Import your model

// POST route to save inquiry
router.post("/", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
