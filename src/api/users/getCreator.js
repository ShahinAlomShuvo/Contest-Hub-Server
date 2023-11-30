const Users = require("../../models/users");

const getCreator = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await Users.find({ email });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getCreator;
