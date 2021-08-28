const { feedbackTemplate } = require("./feedback");
const { newPostulationTemplate } = require("./newPostulation");
const { postulationFailTemplate } = require("./postulationFail");
const { statusPostulationTemplate } = require("./statusPostulation");
const { emailBackOfficeTemplate } = require("./emailBackOffice");

module.exports = {
  feedbackTemplate,
  newPostulationTemplate,
  postulationFailTemplate,
  statusPostulationTemplate,
  emailBackOfficeTemplate
};
