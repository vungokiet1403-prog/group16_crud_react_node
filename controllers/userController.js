// controllers/userController.js

let users = [
  { id: 1, name: "Vo Hoang KHA" },
  { id: 2, name: "Kiet Bap" },
  { id: 3, name: "Minh Khang",}
];

// GET: Lấy tất cả users
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST: Thêm user mới
exports.createUser = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
};

// PUT: Cập nhật user theo id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id == id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE: Xóa user theo id
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);
  res.json({ message: "User deleted" });
};
