require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const emailCollection = require('../models/emailCollection')

const Email = process.env.EMAIL;

module.exports = sendEmail = async (req, link, res) => {
  try {
    const { name, to, message, link } = req.body;
    
    if (name == '' || undefined || to == '' || undefined) {
      return res.status(400).json({
        message: 'Input fields are required',
        success: false
      });
      console.log('required')
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let msg = {
      from: {
        email: Email,
        name: 'XSHARE'
      },
      to: to,
      subject: 'File Share',
      text: message,
      html: `
      <div>
        <p>
            Hello there! Welcome to the XShare file sharing service.<br> ${name} sent you a file.
            <br>
            You can access the file using the link below:<br> ${link}
        </p>
        <p>${message}</p>
      </div>`
    };

    sgMail.send(msg, (error, body) => {
      if (error) {
        return 'failed';
      } else {
        return 'succesful';
      }
    });
    
    emailCollection.findOne({email:to}, (err, email) => {
      if (email) {
       console.log('email exist')
      } else {
        emailCollection.create({ email: to }, (err, email) => {
          if (err) {
            console.log('something went wrong')
          } else {
            console.log(email)
            console.log('email saved')
          }
        })
      }
    })
  }catch (error) {
    res.json({ message: error, success: false });
  }
};
