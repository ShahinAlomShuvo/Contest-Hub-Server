const express = require("express");
const { saveUserInfo, getUserInfo } = require("../../api/users");
const router = express.Router();

router.post("/users", saveUserInfo);
router.get("/users/:email", getUserInfo);

module.exports = router;
