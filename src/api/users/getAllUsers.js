const Users = require("../../models/users");

const getAllUsers = async (req, res) => {
  try {
    const result = await Users.find();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getAllUsers;
