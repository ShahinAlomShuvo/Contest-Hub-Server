const express = require("express");
const {
  saveRegistrationInfo,
  getRegistrationInfo,
} = require("../../api/registration");
const router = express.Router();

router.post("/payments", saveRegistrationInfo);
router.get("/singleCreatorContest/:email", getRegistrationInfo);

module.exports = router;
