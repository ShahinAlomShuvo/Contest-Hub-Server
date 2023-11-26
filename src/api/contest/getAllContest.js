const Contest = require("../../models/contest");

const getAllContest = async (req, res) => {
  try {
    const result = await Contest.find();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllContest;
