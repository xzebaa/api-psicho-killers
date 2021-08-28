const nodemailer = require("nodemailer");

const sendGridMail = require("@sendgrid/mail");

const SENGRID_ACTIVE = false;

const FROM_ACCOUNT = "reportes@simplecheck.cl";

const {
  feedbackTemplate,
  newPostulationTemplate,
  postulationFailTemplate,
  statusPostulationTemplate,
  emailBackOfficeTemplate
} = require("./../utils/template");

console.log(process.env.SENDGRID_API_KEY);
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const templatePostulation = ({ email, name }) => {
  const body = "aa";
  return {
    to: email,
    from: FROM_ACCOUNT,
    subject: "POSTULACION",
    text: body,
    html: newPostulationTemplate({ name: name })
  };
};

const templateFeedback = ({ feedback, email, name }) => {
  const body = "";
  return {
    to: email,
    from: FROM_ACCOUNT,
    subject: "FEEDBACK",
    text: body,
    html: feedbackTemplate({ feedback, email, name })
  };
};

const templatePostulationFail = email => {
  const body = "";
  return {
    to: email,
    from: FROM_ACCOUNT,
    subject: "POSTULATION FAIL",
    text: body,
    html: postulationFailTemplate({ name: "sebaaaa" })
  };
};

const templateStatusPostulation = ({ email, name }) => {
  const body = "aa";

  return {
    to: email,
    from: FROM_ACCOUNT,
    subject: "POSTULACION STATUS",
    text: body,
    html: statusPostulationTemplate({ name })
  };
};

const templateBackOffice = () => {
  const body = "";
  return {
    to: "israel.lazo@peanuthub.cl,",
    from: FROM_ACCOUNT,
    subject: "NUEVO POSTULANTE",
    text: body,
    html: emailBackOfficeTemplate()
  };
};

const sendEmail = async email => {
  try {
    if (SENGRID_ACTIVE) {
      await sendGridMail.send(email);
    } else {
      sendEmailNodeMailer(email);
    }
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
    await sendEmail(templatePostulation({ email, name }));
    sendEmailBackOfficeTemplate();

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
    await sendEmail(templateStatusPostulation({ email, name }));

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
    await sendEmail(templateFeedback({ feedback, email }));
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Error sending  email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendEmailNodeMailer = mailOptions => {
  const transporter = nodemailer.createTransport({
    host: "mail.dorrola.com",
    port: 587,
    auth: {
      user: "reportes@simplecheck.cl",
      pass: "cvaycbnqgdbx"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  console.log("enviando  mail");
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendEmailBackOfficeTemplate = async email => {
  try {
    await sendEmail(templateBackOffice());
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
  sendEmailFeedBack,
  emailBackOfficeTemplate
};
