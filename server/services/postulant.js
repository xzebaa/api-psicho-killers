const Postulant = require("./../models/postulant");

const create = async postulant => {
  console.log(postulant);
  const newPostulant = await Postulant.create(postulant);
  return newPostulant;
};

const get = async find => {
  const newPostulant = await Postulant.find({});
  return newPostulant;
};

const update = async (id, postulant) => {
  const newPostulant = await Postulant.findByIdAndUpdate(
    id,
    { $set: postulant },
    { new: true }
  ).exec();
  return newPostulant;
};

module.exports = { create, get, update };
