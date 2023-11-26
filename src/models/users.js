const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

const Users = model("Users", UserSchema);

module.exports = Users;
