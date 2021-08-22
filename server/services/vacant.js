const Vacant = require("./../models/vacant");

const create = async vacant => {
  const newVacant = await Vacant.create(vacant);
  return newVacant;
};

const get = async find => {
  const newVacant = await Vacant.find({});
  return newVacant;
};

const update = async (id, vacant) => {
  const newVacant = await Vacant.findByIdAndUpdate(
    id,
    { $set: vacant },
    { new: true }
  ).exec();
  return newVacant;
};

module.exports = { create, get, update };
