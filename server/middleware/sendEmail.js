require('dotenv').config();

const Email = process.env.EMAIL;
const EmailPass = process.env.EMAIL_PASS;
const nodemailer = require('nodemailer');
module.exports = sendEmail = async (req, link, res) => {
  try {
    const { name, to } = req.body;
    if (name == '' || undefined || to == '' || undefined) {
      return res.json({ message: 'Input fields are required', success: false });
    }
    const mail = {
      smtpConfig: {
        host: 'smtp.gmail.com',
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
      subject: 'File Share',
      html: `
      <div>
        <td align="center" class="esd-block-text">
          <h1>Welcome to XShare</h1>
        </td> 
        <td align="center" class="esd-block-text es-p20t">
          <p style="font-size: 18px;"><strong>${name} sent you a file</strong></p>
        </td><td align="center" class="esd-block-text">
        <ul><br><br></ul>
        <p>${link}</p>
      </td></div>`
    };
    transporter.sendMail(msg, (error, body) => {
      if (error) {
        return 'failed';
      } else {
        return 'succesful';
      }
    });
  } catch (error) {
    res.status(200).json({ message: error, success: false });
  }
};
