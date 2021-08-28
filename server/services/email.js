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

const templatePostulation = ({ email, name }) => {
  const body = "aa";
  return {
    to: email,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "POSTULACION",
    text: body,
    html: newPostulationTemplate({ name: name })
  };
};

const templateFeedback = ({ feedback, email, name }) => {
  const body = "";
  return {
    to: email,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "FEEDBACK",
    text: body,
    html: feedbackTemplate({ feedback, email, name })
  };
};

const templatePostulationFail = email => {
  const body = "";
  return {
    to: email,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "POSTULATION FAIL",
    text: body,
    html: postulationFailTemplate({ name: "sebaaaa" })
  };
};

const templateStatusPostulation = ({ feedback, email, name }) => {
  const body = "";
  return {
    to: email,
    from: "sebastian.alvarez@peanuthub.cl",
    subject: "POSTULACION STATUS",
    text: body,
    html: statusPostulationTemplate({ name })
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
    console.error("Error sending  email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendEmailPostulation = async ({ email, name }) => {
  try {
    await sendGridMail.send(templatePostulation({ email, name }));

    console.log("email sent successfully");
  } catch (error) {
    console.error("Error sending  email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendEmailStatusPostulation = async ({ email, name }) => {
  try {
    await sendGridMail.send(templateStatusPostulation({ email, name }));

    console.log("email sent successfully");
  } catch (error) {
    console.error("Error sending  email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendEmailFeedBack = async (feedback, email) => {
  try {
    await sendGridMail.send(templateFeedback({ feedback, email }));
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Error sending  email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = {
  sendEmail,
  sendEmailPostulation,
  sendEmailStatusPostulation,
  sendEmailFeedBack
};
