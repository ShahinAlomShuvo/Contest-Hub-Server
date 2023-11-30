const { Schema, model, Types } = require("mongoose");

const ContestSubmissionSchema = new Schema({
  email: { type: String, require: true },
  name: { type: String, require: true },
  image: { type: String, require: true },
  submittedTask: { type: String, require: true },
  contestName: { type: String, require: true },
  contestId: {
    type: Types.ObjectId,
    ref: "Contest",
  },
});

const ContestSubmissionModel = model(
  "ContestSubmission",
  ContestSubmissionSchema
);

module.exports = ContestSubmissionModel;
