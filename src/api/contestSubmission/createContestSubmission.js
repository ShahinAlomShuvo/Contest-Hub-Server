const ContestSubmissionModel = require("../../models/contestSubmission");

const createContestSubmission = async (req, res) => {
  try {
    const { email, name, submittedTask, contestId, contestName } = req.body;
    const result = await ContestSubmissionModel.create({
      email,
      name,
      submittedTask,
      contestId,
      contestName,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = createContestSubmission;
