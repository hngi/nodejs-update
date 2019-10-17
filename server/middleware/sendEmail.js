require('dotenv').config();

const Email = process.env.EMAIL;
const EmailPass = process.env.EMAIL_PASS;
const nodemailer = require('nodemailer');
module.exports = sendEmail = async (req, res) => {
  try {
    const { name, to, message } = req.body;
    if (
      name == '' ||
      undefined ||
      to == '' ||
      undefined ||
      message == '' ||
      undefined
    ) {
      return res.json({ message: 'Input fields are required', success: false });
    }
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: Email,
        pass: EmailPass
      }
    });

    let msg = {
      from: Email,
      to: to,
      subject: 'File Share',
      html: '<div>message</div>'
    };

    transporter.sendMail(msg, (error, body) => {
      if (error) {
        res.json({ message: 'Could not send Email', success: false });
      } else {
        res.json({
          message: 'File successfully sent to ' + msg.to,
          success: true
        });
      }
    });
  } catch (error) {
    res.status(200).json({ message: error, success: false });
  }
};
