import nodemailer from "nodemailer";

//  File for global function
import domPurify from "dompurify";

const purifyDOM = async(data) => {
    return domPurify.sanitize(data);
};

// Function to send mail
const sendMail = async(options) => {
    try {
      var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.MAIL,
          pass: process.env.MAILPASS,
        },
      });
      var mailOptions = {
        to: options.email,
        from: "Digital slam",
        subject: options.subject,
        text: options.body,
      };
      await smtpTransport.sendMail(mailOptions, (error) => {
        if (error) {
          console.log("Some thing broke in sending email", error);
          throw new Error("Token sending failed",error);
        }
      });
    } catch (error) {
      console.log("Some thing broke :( - Service: on Creating user sending mail",error);
      throw new Error(error);
    }
  };
  
  
// Function that generate unique id
const generateUniqueId = () => {
    return Math.random().toString(36).substring(2);
};

export default{
    purifyDOM,
    sendMail,
    generateUniqueId,
}