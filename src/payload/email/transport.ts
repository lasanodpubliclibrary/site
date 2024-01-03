import { siteConfig } from "../../config/site";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY!,
  },
});

const email = {
  transport,
  fromName: siteConfig.name!,
  fromAddress: process.env.FROM_EMAIL!,
};

export default email;
