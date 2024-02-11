import otpGenerator from "otp-generator";
import User from "../models/user.js";
import OTP from "../models/otp.js";
import { createError, sendMail } from "../utils/functions.js"; 

export const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) return next(createError(res, 400, "Email is required"));

    let user = await User.findOne({ email });
    if (!user) user = await User.create({ email, verified: false });

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

    await User.updateOne(
      { email },
      {
        isSubscribed: true,
      }
    );

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    next(createError(res, 500, error.message));
  }
};

export const resend = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) return next(createError(res, 400, "Email is required"));

    const otp = otpGenerator.generate(5, {
      digits: true,
      lowerCaseAlphabets: false,
      specialChars: false,
      upperCaseAlphabets: false,
    });
    await OTP.create({ email, otp, name: "otp" });

    sendMail(email, "Verification", `<p>Your OTP code is ${otp}</p>`);

    res.status(200).json({ message: "OTP resent successfully." });
  } catch (error) {
    next(createError(res, 500, error.message));
  }
};
