const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// Get user profile
router.get("/profile", async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
  
});

module.exports = router;
