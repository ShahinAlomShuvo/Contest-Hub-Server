const Contest = require("../../models/contest");

const getCreatorContest = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await Contest.find({ creatorEmail: decodeURI(email) });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getCreatorContest;
