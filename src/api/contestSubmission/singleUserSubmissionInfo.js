const Contest = require("../../models/contest");
const ContestSubmissionModel = require("../../models/contestSubmission");

const singleUserSubmissionInfo = async (req, res) => {
  try {
    const { email } = req.params;
    const attemptCount = await ContestSubmissionModel.countDocuments({
      email: email,
    });
    const winningCount = await Contest.countDocuments({ winnerEmail: email });
    res.json({ attemptCount, winningCount });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = singleUserSubmissionInfo;
