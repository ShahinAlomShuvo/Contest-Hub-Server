const express = require("express");
const { addContest, getAllContest } = require("../../api/contest");
const router = express.Router();

router.post("/contest", addContest);
router.get("/contest", getAllContest);

module.exports = router;
