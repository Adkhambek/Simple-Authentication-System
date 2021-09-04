const nodemailer = require("nodemailer");
const { mailAddress, mailPassword } = require("../config");

const sendMail = async (sendTo, mailSubject, htmlbody) => {
  let mailTranporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailAddress,
      pass: mailPassword,
    },
  });

  let sendResult = await mailTranporter.sendMail({
    from: mailAddress,
    to: sendTo,
    subject: mailSubject,
    html: htmlbody,
  });
  if (sendResult) {
    return sendResult;
  } else {
    console.log("Error occures");
  }
};

module.exports = sendMail;
