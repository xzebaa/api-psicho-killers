const mongoose = require("mongoose");

const statusOptions = {
  values: ["PENDING", "COMPLETED"],
  message: "{VALUE} no es un estado valido"
};

const originOptions = {
  values: ["LANDING", "REFERRED"],
  message: "{VALUE} no es un ORIGEN valido"
};

const stepInterviewOtions = {
  values: [
    "LANDING",
    "CALL",
    "INTERVIEW",
    "CUSTOMER-INTERVIEW",
    "APPLICATION_FINISHED"
  ],
  message: "{VALUE} no es un estado de entrevista valido"
};

let Schema = mongoose.Schema;

let postulationSchema = new Schema(
  {
    postulantId: { type: Schema.Types.ObjectId, ref: "Postulant" },
    vacantId: { type: Schema.Types.ObjectId, ref: "Vacant" },
    origin: {
      type: String,
      default: "LANDING",
      enum: originOptions
    },
    interviewersNames: [
      {
        type: String
      }
    ],
    stepInterview: {
      type: String,
      default: "LANDING",
      enum: stepInterviewOtions
    },
    status: {
      type: String,
      default: "PENDING",
      enum: statusOptions
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Postulation", postulationSchema);
