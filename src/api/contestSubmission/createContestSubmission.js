const ContestSubmissionModel = require("../../models/contestSubmission");

const createContestSubmission = async (req, res) => {
  try {
    const { email, name, submittedTask, contestId, contestName, image } =
      req.body;
    const result = await ContestSubmissionModel.create({
      email,
      name,
      image,
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
