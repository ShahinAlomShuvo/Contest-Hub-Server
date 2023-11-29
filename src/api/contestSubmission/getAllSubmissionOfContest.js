const Contest = require("../../models/contest");
const ContestSubmissionModel = require("../../models/contestSubmission");

const getAllSubmissionOfContest = async (req, res) => {
  try {
    const { contestId } = req.params;
    const submittedContest = await Contest.findById(contestId);
    const result = await ContestSubmissionModel.find({ contestId });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllSubmissionOfContest;
