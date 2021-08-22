const mongoose = require("mongoose");

const statusOptions = {
  values: ["PENDING", "COMPLETED"],
  message: "{VALUE} no es un estado valido"
};

const originOptions = {
  values: ["LANDING", "VACANT", "WEB"],
  message: "{VALUE} no es un ORIGEN valido"
};

let Schema = mongoose.Schema;

let challengerSchema = new Schema(
  {
    postulantId: { type: Schema.Types.ObjectId, ref: "Postulant" },
    origin: {
      type: String,
      default: "LANDING",
      enum: originOptions
    },
    status: {
      type: String,
      default: "PENDING",
      enum: statusOptions
    },
    active: {
      type: Boolean,
      default: true
    },
    typeChallenger: {
      type: String
    },
    questions: [{ type: Object }],
    answers: [{ type: Object }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Challenger", challengerSchema);
