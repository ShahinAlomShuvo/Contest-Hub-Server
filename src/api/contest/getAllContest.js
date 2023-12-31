const Contest = require("../../models/contest");

const getAllContest = async (req, res) => {
  try {
    const result = await Contest.find({ status: "accepted" });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getAllContest;
