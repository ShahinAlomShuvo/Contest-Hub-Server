const { Schema, model } = require("mongoose");

const ContestSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  banner: {
    type: String,
    require: true,
  },
  attempt_count: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  deadline: {
    type: String,
    require: true,
  },
  tags: {
    type: String,
    require: true,
  },
  task: {
    type: String,
    require: true,
  },
  prizeMoney: {
    type: Number,
    require: true,
  },
  entryFee: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  creatorEmail: {
    type: String,
    require: true,
  },
});

const Contest = model("Contest", ContestSchema);

module.exports = Contest;
