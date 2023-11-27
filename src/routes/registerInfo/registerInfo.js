const express = require("express");
const saveRegistrationInfo = require("../../api/registration");
const router = express.Router();

router.post("/payments", saveRegistrationInfo);

module.exports = router;
