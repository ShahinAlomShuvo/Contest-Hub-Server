const Contest = require("../../models/contest");

const popularContest = async (req, res) => {
  try {
    const result = await Contest.find({ status: "accepted" })
      .sort({ attempt_count: -1 })
      .skip(0)
      .limit(6);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = popularContest;
