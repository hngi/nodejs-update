require("dotenv").config();

const Email = process.env.EMAIL;
const EmailPass = process.env.EMAIL_PASS;
const nodemailer = require("nodemailer");
module.exports = sendEmail = async (req, link, res) => {
  try {
    const { name, to } = req.body;
    if (name == "" || undefined || to == "" || undefined) {
      return res.json({ message: "Input fields are required", success: false });
    }
    const mail = {
      smtpConfig: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: Email,
          pass: EmailPass
        }
      }
    };
    let transporter = nodemailer.createTransport(mail.smtpConfig);
    let msg = {
      from: Email,
      to: to,
      subject: "File Share",
      html: `
      <div>
         <h1>Welcome to XShare</h1>
        <br>
        <p>
            Hello there! Welcome to the XShare file sharing service.<br> ${name} sent you a file.
            You can access the file using the link below:<br> ${link}
        </p>
      </div>`
    };
    transporter.sendMail(msg, (error, body) => {
      if (error) {
        return "failed";
      } else {
        return "succesful";
      }
    });
  } catch (error) {
    res.status(200).json({ message: error, success: false });
  }
};
