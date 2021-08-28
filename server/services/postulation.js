const Postulation = require("../models/postulation");
const {
  sendEmailPostulation,
  sendEmailStatusPostulation,
  sendEmailFeedBack
} = require("./email");

const PostulantService = require("./postulant");

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

const newPostulation = async data => {
  const { postulant, postulation, vacantId } = data;

  const checkedIfExistPostulant = await PostulantService.getByEmail(
    postulant.email
  );

  let idPostulantVerify;

  if (checkedIfExistPostulant.length === 0) {
    const newPostulant = await PostulantService.create(postulant);
    idPostulantVerify = newPostulant._id;
  } else {
    let { _id } = checkedIfExistPostulant[0];
    idPostulantVerify = _id;
  }
  console.log("idPostulantVerify", idPostulantVerify);

  const newPostulation = {
    ...postulation,
    vacantId,
    postulantId: idPostulantVerify
  };

  const postulationBD = await create(newPostulation);

  if (!!postulationBD._id) {
    sendEmailPostulation({ email: postulant.email, name: postulant.name });
  }

  return postulationBD;
};

const updateStepChallenger = async data => {
  const { id: _id } = data;

  const newPostulation = await Postulation.findByIdAndUpdate(
    _id,
    { $set: { stepInterview: "CALL" } },
    { new: true }
  ).exec();

  console.log(newPostulation);
  const newPostulant = await PostulantService.findById(
    String(newPostulation.postulantId)
  );

  const { email, name } = newPostulant[0];

  sendEmailStatusPostulation({ email, name });

  return newPostulation;
};

module.exports = { create, get, update, newPostulation, updateStepChallenger };
