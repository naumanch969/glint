import otpGenerator from "otp-generator";
import User from "../models/user.js";
import OTP from "../models/otp.js";
import Contact from "../models/contact.js";
import { createError, sendMail } from "../utils/functions.js";  

export const contactFormSubmit = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!email) return next(createError(res, 400, "Email is missing"));
    if (!name) return next(createError(res, 400, "Name is missing."));
    if (!message) return next(createError(res, 400, "Message is missing."));

    let user = await User.findOne({ email });
    if (!user) user = await User.create({ name, email, verified: false });

    if (!user.verified) {
      const otp = otpGenerator.generate(5, {
        digits: true,
        lowerCaseAlphabets: false,
        specialChars: false,
        upperCaseAlphabets: false,
      });
      await OTP.create({ email, otp, name: "otp" });

      sendMail(email, "Verification", `<p>Your OTP code is ${otp}</p>`);
    }

    await Contact.create({
      user: user._id,
      subject: subject || "",
      message,
    });

    res
      .status(200)
      .json({ message: "Contact created", verified: user.verified });
  } catch (error) {
    next(createError(res, 500, error.message));
  }
};

export const verify = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!otp || !email)
      return next(createError(res, 400, "Email and OTP are required"));

    const findedUser = await User.findOne({ email });

    if (!findedUser) return next(createError(res, 400, "User not found"));

    const otps = await OTP.find({ email });
    if (otps?.length == 0)
      return next(createError(res, 400, "You have entered an expired OTP"));

    const verifyRegisterOTPs = otps.filter((otp) => otp.name === "otp");

    const findedOTP = verifyRegisterOTPs[verifyRegisterOTPs.length - 1];

    if (!findedOTP)
      return next(createError(res, 400, "You have entered an expired OTP"));

    const isValidOTP = otp === findedOTP.otp;

    if (!isValidOTP) return next(createError(res, 400, "Wrong OTP"));

    await User.updateOne({ email }, { verified: true });
    await OTP.deleteMany({ email, name: "otp" });

    res.status(200).json({ message: "Your form submission got completed" });
  } catch (err) {
    next(createError(res, 500, err.message));
    console.log(err);
  }
};
