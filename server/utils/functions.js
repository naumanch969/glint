import nodemailer from "nodemailer";

export const sendMail = (to, subject, html) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      html,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.error("err in sending mail", err);
      else console.log("Mail transfered successfully.");
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const createError = (res, status, message) => {
  res.status(status).json({ message });
};
