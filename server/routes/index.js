import express from "express";

import { contactFormSubmit, verify } from "../controllers/contact.js";
import { subscribe, resend } from "../controllers/subscribe.js";

const router = express.Router();

router.post("/submit", contactFormSubmit);
router.post("/verify", verify);
router.post("/subscribe", subscribe);
router.post("/resend", resend);

export default router;
