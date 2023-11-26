const Users = require("../../models/users");

const saveUserInfo = async (req, res) => {
  try {
    const user = req.body;
    const query = { email: user.email };
    const isExist = await Users.findOne(query);

    if (isExist) {
      return res.json({ message: "user already exist", insertedId: null });
    }

    const result = await Users.create(user);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = saveUserInfo;
