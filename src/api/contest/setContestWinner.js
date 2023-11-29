const Contest = require("../../models/contest");

const setContestWinner = async (req, res) => {
  try {
    const { id, email } = req.params;
    const result = await Contest.findByIdAndUpdate(
      id,
      {
        winnerEmail: decodeURI(email),
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = setContestWinner;
