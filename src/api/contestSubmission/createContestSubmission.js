const ContestSubmissionModel = require("../../models/contestSubmission");

const createContestSubmission = async (req, res) => {
  try {
    const { email, contestId } = req.body;

    // Check if a submission already exists for the user and contest
    const existingSubmission = await ContestSubmissionModel.findOne({
      email,
      contestId,
    });

    // If a submission exists, prevent creating a new one
    if (existingSubmission) {
      return res
        .status(400)
        .json({ message: "You have already submitted for this contest." });
    }

    const { name, submittedTask, contestName, image } = req.body;
    const result = await ContestSubmissionModel.create({
      email,
      name,
      image,
      submittedTask,
      contestId,
      contestName,
    });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = createContestSubmission;
