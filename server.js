const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(require("cors")());
app.use(express.json());
app.use("/api", require("./routes/user"));

// ✅ Kết nối MongoDB
mongoose
  .connect("mongodb+srv://minhkhang310304_db_user:khang3103@cluster0.wwepwir.mongodb.net/groupDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ Đã kết nối MongoDB"))
  .catch((err) => console.log("❌ Lỗi MongoDB:", err));

// ✅ Import route
const userRoutes = require("./routes/user");
app.use("/api", userRoutes); // <-- phải có dòng này

// ✅ Chạy server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));
