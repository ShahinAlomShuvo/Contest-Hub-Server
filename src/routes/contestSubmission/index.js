const express = require("express");
const {
  getAllContestSubmission,
  getAllSubmissionOfContest,
  createContestSubmission,
  singleUserSubmissionInfo,
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
router.get("/contest/submission-info/:email", singleUserSubmissionInfo);

module.exports = router;
