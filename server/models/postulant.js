const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let postulantSchema = new Schema(
  {
    rut: {
      type: String
    },
    name: {
      type: String,
      required: [true, "nombre es necesario"]
    },
    lastname: {
      type: String
    },
    nationality: {
      type: String,
      required: [true, "nacionalidad necesario"]
    },
    permanentResidence: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      unique: true,
      type: String,
      required: [true, "el email es obligatorio"]
    },
    urlCV: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Postulant", postulantSchema);
