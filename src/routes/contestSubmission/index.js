const express = require("express");
const {
  getAllContestSubmission,
  getAllSubmissionOfContest,
  createContestSubmission,
} = require("../../api/contestSubmission");
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

router.get("/contest-submitted-task", verifyToken, getAllContestSubmission);
router.get(
  "/contest-submitted-task/:contestId",
  verifyToken,
  getAllSubmissionOfContest
);
router.post("/contest-submitted-task", verifyToken, createContestSubmission);

module.exports = router;
