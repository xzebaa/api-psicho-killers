const mongoose = require("mongoose");

const statusOptions = {
  values: ["PENDING_SENT", "SENT"],
  message: "{VALUE} no es un estado valido"
};

stepInterviewOption = {
  values: [
    "LANDING",
    "CALL",
    "INTERVIEW",
    "CLIENT_INTERVIEW",
    "APPLICATION_FINISHED"
  ],
  message: "{VALUE} no es un estado de entrevista valido"
};

let Schema = mongoose.Schema;

let feedbackSchema = new Schema(
  {
    postulantId: { type: Schema.Types.ObjectId, ref: "Postulant" },
    postulationId: { type: Schema.Types.ObjectId, ref: "Postulation" },
    feedback: {
      type: String,
      require: true
    },
    interviewersNames: [
      {
        type: String
      }
    ],
    status: {
      type: String,
      default: "PENDING_SENT",
      enum: statusOptions
    },
    stepInterview: {
      type: String,
      enum: stepInterviewOption
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
