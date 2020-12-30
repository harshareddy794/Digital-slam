//  File for global function
import domPurify from "dompurify";

const purifyDOM = async(data) => {
    return domPurify.sanitize(data);
};


// Function to send mail
const sendMail = (options) => {
    try {
      var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.MAIL,
          pass: process.env.MAILPASS || "Digifai2020",
        },
      });
      var mailOptions = {
        to: options.email,
        from: "digifai",
        subject: options.subject,
        text: options.body,
      };
      smtpTransport.sendMail(mailOptions, (error) => {
        if (error) {
          console.log("Some thing broke in sending email", error);
          throw new Error(constants.tokenMessage.TOKEN_SENT_FAILED);
        }
      });
    } catch (error) {
      console.log(
        "Some thing broke :( - Service: on Creating user sending mail",
        error
      );
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