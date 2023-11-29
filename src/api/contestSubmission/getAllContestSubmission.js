const ContestSubmissionModel = require("../../models/contestSubmission");

const getAllContestSubmission = async (req, res) => {
  try {
    const result = await ContestSubmissionModel.find();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllContestSubmission;
