const Contest = require("../../models/contest");

const deleteContest = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contest.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteContest;
