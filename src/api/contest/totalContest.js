const Contest = require("../../models/contest");

const totalContest = async (req, res) => {
  try {
    const result = await Contest.find();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = totalContest;
