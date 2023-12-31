const Contest = require("../../models/contest");

const addContest = async (req, res) => {
  try {
    const contest = req.body;
    const result = await Contest.create(contest);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = addContest;
