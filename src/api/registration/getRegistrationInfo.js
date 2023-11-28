const Contest = require("../../models/contest");
const RegisterInfo = require("../../models/registerPayment");

const getRegistrationInfo = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);
    const userPaidContest = await RegisterInfo.find({
      email: decodeURI(email),
    });
    const contestIds = userPaidContest.map((contest) => contest.contestId);
    const registerContest = await Contest.find({ _id: { $in: contestIds } });
    console.log(contestIds, registerContest);
    res.json(registerContest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getRegistrationInfo;
