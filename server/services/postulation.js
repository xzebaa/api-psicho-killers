const Postulation = require("../models/postulation");

const create = async postulation => {
  const newPostulation = await Postulation.create(postulation);
  return newPostulation;
};

const get = async find => {
  const newPostulation = await Postulation.find({});
  return newPostulation;
};

const update = async (id, postulation) => {
  const newPostulation = await Postulation.findByIdAndUpdate(
    id,
    { $set: postulation },
    { new: true }
  ).exec();
  return newPostulation;
};

module.exports = { create, get, update };
