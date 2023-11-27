const Contest = require("../../models/contest");

const searchContest = async (req, res) => {
  try {
    const { value } = req.query;
    const result = await Contest.find({
      status: "accepted",
      tags: { $regex: new RegExp(value, "i") },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = searchContest;
