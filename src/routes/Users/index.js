const express = require("express");
const {
  saveUserInfo,
  getUserInfo,
  getAllUsers,
  updateRole,
  getAdmin,
} = require("../../api/users");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.post("/users", saveUserInfo);
router.get("/allUsers", getAllUsers);
router.get("/users/:email", verifyToken, getUserInfo);
router.get("/users/admin/:email", verifyToken, getAdmin);
router.get("/users/creator/:email", verifyToken, getAdmin);
router.patch("/users/:email/:role", verifyToken, updateRole);

module.exports = router;
