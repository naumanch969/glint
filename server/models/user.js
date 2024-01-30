import { Schema, model, Document, Types } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required:false },
  email: { type: String, unique: true },
  verified: { type: Boolean, default: false },
  isSubscribed: { type: Boolean, default: false },
});

const User = model("User", userSchema);

export default User;
