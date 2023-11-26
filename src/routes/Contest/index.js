const express = require("express");
const { addContest, getAllContest } = require("../../api/contest");
const getSingleContest = require("../../api/contest/getSingleContest");
const router = express.Router();

router.post("/contest", addContest);
router.get("/contest", getAllContest);
router.get("/contest/:id", getSingleContest);

module.exports = router;
