const Contest = require("../../models/contest");

const updateContest = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Contest.findByIdAndUpdate(
      id,
      {
        $inc: {
          attempt_count: 1,
        },
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateContest;
