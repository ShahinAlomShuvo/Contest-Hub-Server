const Contest = require("../../models/contest");

const singleUserWinningData = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await Contest.find({ winnerEmail: email });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = singleUserWinningData;
