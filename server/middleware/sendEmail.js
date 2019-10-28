const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

const Email = process.env.EMAIL;

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

const sendEmail = {
  async sendEmail(req, res) {
    try {
      console.log(Email);
      const {
        data: { name, to, message, link }
      } = res.locals;
      const sMail = await transport.sendMail({
        from: `XshareNG ${Email}`,
        to,
        subject: 'File Share',
        html: `
      <div>
        <p>
            Hello there! Welcome to the XShare file sharing service.<br> ${name} sent you a file.
            <br>
            You can access the file using the link below:<br> ${link}
        </p>
        <p>${message}</p>
      </div>`
      });
      res.status(200).json({
        status: 200,
        message: 'Email Sent Successfully'
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  }
};

module.exports = sendEmail;
