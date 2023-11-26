const express = require("express");
const { addContest } = require("../../api/contest");
const router = express.Router();

router.post("/contest", addContest);

module.exports = router;
