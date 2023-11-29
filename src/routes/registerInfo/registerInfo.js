const express = require("express");
const {
  saveRegistrationInfo,
  getRegistrationInfo,
} = require("../../api/registration");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.post("/payments", saveRegistrationInfo);
router.get("/singleCreatorContest/:email", verifyToken, getRegistrationInfo);

module.exports = router;
