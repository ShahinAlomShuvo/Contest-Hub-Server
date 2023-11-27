const Users = require("../../models/users");

const updateRole = async (req, res) => {
  try {
    const { email, role } = req.params;
    const query = { email: email };
    const user = await Users.findOneAndUpdate(query, { role: role });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateRole;
