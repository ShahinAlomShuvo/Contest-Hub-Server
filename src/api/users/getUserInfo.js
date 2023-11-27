const Users = require("../../models/users");

const getUserInfo = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const result = await Users.findOne(query);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getUserInfo;
