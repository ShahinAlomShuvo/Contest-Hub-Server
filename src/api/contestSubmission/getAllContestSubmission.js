const ContestSubmissionModel = require("../../models/contestSubmission");

const getAllContestSubmission = async (req, res) => {
  try {
    return await ContestSubmissionModel.find();
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllContestSubmission;
