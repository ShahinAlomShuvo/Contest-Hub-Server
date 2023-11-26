const generateToken = require("../../../utils/generateToken");

const createToken = async (req, res) => {
  const user = req.body;
  console.log("user for token", user);
  const token = generateToken(user);

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send({ success: true });
};
module.exports = createToken;
