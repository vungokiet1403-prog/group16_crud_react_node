// routes/user.js
const express = require("express");
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("User API hoạt động!");
});

// Đăng ký
router.post("/signup", (req, res) => {
  res.json({ message: "Đăng ký thành công" });
});

// Đăng nhập
router.post("/login", (req, res) => {
  res.json({ message: "Đăng nhập thành công" });
});
router.get("/test", (req, res) => {
  res.send("API test OK");
});

module.exports = router;
