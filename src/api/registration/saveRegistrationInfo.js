const RegisterInfo = require("../../models/registerPayment");

const saveRegistrationInfo = async (req, res) => {
  try {
    const registerUser = req.body;
    const result = await RegisterInfo.create(registerUser);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = saveRegistrationInfo;
