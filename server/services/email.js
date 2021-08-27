const sendGridMail = require("@sendgrid/mail");
const {
  feedbackTemplate,
  newPostulationTemplate,
  postulationFailTemplate,
  statusPostulationTemplate
} = require("./../utils/template");

const EMAIL = "x.zebaa@gmail.com";

console.log("here");
console.log(process.env.SENDGRID_API_KEY);
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const templatePostulation = () => {
  const body = "This is a POSTULACION";
  return {
    to: EMAIL,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "POSTULACION",
    text: body,
    html: newPostulationTemplate({ name: "sebaaaa" })
  };
};

const templateFeedback = () => {
  const body = "This is a FEEDBACK";
  return {
    to: EMAIL,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "FEEDBACK",
    text: body,
    html: feedbackTemplate({ name: "sebaaaa" })
  };
};

const templatePostulationFail = () => {
  const body = "This is a FEEDBACK";
  return {
    to: EMAIL,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "POSTULATION FAIL",
    text: body,
    html: postulationFailTemplate({ name: "sebaaaa" })
  };
};

const templateStatusPostulation = () => {
  const body = "This is a POSTULATION";
  return {
    to: EMAIL,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "POSTULACION STATUS",
    text: body,
    html: statusPostulationTemplate({ name: "sebaaaa" })
  };
};

const sendEmail = async () => {
  try {
    await sendGridMail.send(templatePostulation());
    await sendGridMail.send(templateFeedback());
    await sendGridMail.send(templatePostulationFail());
    await sendGridMail.send(templateStatusPostulation());
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Error sending test email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = { sendEmail };
