const Contest = require("../../models/contest");

const confirmContest = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contest.findByIdAndUpdate(
      id,
      { status: "accepted" },
      { new: true }
    );
    console.log(id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = confirmContest;
