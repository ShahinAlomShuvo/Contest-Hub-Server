const { Schema, model } = require("mongoose");

const RegisterInfoSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  profilePicture: {
    type: String,
    require: true,
  },
  contestId: {
    type: String,
    require: true,
    ref: "Contest",
  },
});

const RegisterInfo = model("RegisterInfo", RegisterInfoSchema);

module.exports = RegisterInfo;
