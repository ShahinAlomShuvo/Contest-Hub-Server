const express = require("express");
const {
  getAllContestSubmission,
  getAllSubmissionOfContest,
  createContestSubmission,
} = require("../../api/contestSubmission");

const router = express.Router();

router.get("/contest-submitted-task", getAllContestSubmission);
router.get("/contest-submitted-task/:contestId", getAllSubmissionOfContest);
router.post("/contest-submitted-task", createContestSubmission);

module.exports = router;
