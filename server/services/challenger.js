const Challenger = require("../models/challenger");

const create = async challenger => {
  const newChallenger = await Challenger.create(challenger);
  return newChallenger;
};

const get = async find => {
  const newChallenger = await Challenger.find({});
  return newChallenger;
};

const update = async (id, challenger) => {
  const newChallenger = await Challenger.findByIdAndUpdate(
    id,
    { $set: challenger },
    { new: true }
  ).exec();
  return newChallenger;
};

module.exports = { create, get, update };
