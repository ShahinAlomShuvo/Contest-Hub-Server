const Contest = require("../../models/contest");

const getSingleContest = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contest.findById(id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getSingleContest;
