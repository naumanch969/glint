import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  subject: { type: String, required: false },
  message: { type: String, required: true },
});

const Contact = model("Contact", contactSchema);

export default Contact;
