const express = require("express");
const {
  saveUserInfo,
  getUserInfo,
  getAllUsers,
  updateRole,
} = require("../../api/users");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.post("/users", saveUserInfo);
router.get("/allUsers", getAllUsers);
router.get("/users/:email", verifyToken, getUserInfo);
router.patch("/users/:email/:role", verifyToken, updateRole);

module.exports = router;
