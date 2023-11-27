const express = require("express");
const {
  saveUserInfo,
  getUserInfo,
  getAllUsers,
  updateRole,
} = require("../../api/users");
const router = express.Router();

router.post("/users", saveUserInfo);
router.get("/allUsers", getAllUsers);
router.get("/users/:email", getUserInfo);
router.patch("/users/:email/:role", updateRole);

module.exports = router;
