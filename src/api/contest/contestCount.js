const Contest = require("../../models/contest");

const contestCount = async (req, res) => {
  try {
    const count = await Contest.estimatedDocumentCount();
    res.json(count);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = contestCount;
