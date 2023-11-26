const express = require("express");
const { saveUserInfo } = require("../../api/users");
const router = express.Router();

router.post("/users", saveUserInfo);

module.exports = router;
