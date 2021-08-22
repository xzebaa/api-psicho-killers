const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let vacantSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "titulo es necesario"]
    },
    description: {
      type: String,
      required: [true, "descripciones necesario"]
    },
    location: {
      type: String,
      required: [true, "locacion necesario"]
    },
    company: {
      type: String,
      required: [true, "compania necesario"]
    },
    salary: {
      type: String,
      required: [false, " salario es requerido"]
    },
    quota: {
      type: String,
      unique: true,
      required: [true, "cupo es obligatorio"]
    },
    benefits: {
      type: String,
      required: [true, "beneficios es necesario"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vacant", vacantSchema);
