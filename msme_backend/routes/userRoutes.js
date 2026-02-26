const express = require("express");
const User = require("../models/User");
const verifyFirebaseToken = require("../middlewares/verifyFirebaseToken");

const router = express.Router();

// Create user profile after Firebase registration
router.post("/register", verifyFirebaseToken, async (req, res) => {
  try {
    const { name, gstin } = req.body;
    const { uid, email } = req.user;

    let user = await User.findOne({ uid });
    if (user) {
      return res.json(user);
    }

    user = await User.create({
      uid,
      email,
      name,
      gstin,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "User registration failed" });
  }
});

// Get current logged-in user
router.get("/me", verifyFirebaseToken, async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

module.exports = router;