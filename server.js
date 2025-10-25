// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Kết nối MongoDB
mongoose
  .connect("mongodb+srv://minhkhang310304_db_user:khang3103@cluster0.wwepwir.mongodb.net/groupDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ Đã kết nối MongoDB"))
  .catch((err) => console.log("❌ Lỗi MongoDB:", err));

// ✅ Import route
const userRoutes = require("./routes/user");
app.use("/api", userRoutes);

// ✅ Chạy server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));
