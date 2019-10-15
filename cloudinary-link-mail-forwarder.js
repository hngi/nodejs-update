// Create a Transport instance using nodemailer
var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      XOAuth2: {
        user: "xxx@gmail.com", // Your gmail address.
        clientId: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET",
        refreshToken: "REFRESH_TOKEN_YOU_JUST_FOUND"
      }
    }
  });
// Setup mail configuration
var mailOptions = {
    from: 'xxx@gmail.com', // sender address
    to: "RECEIVER_EMAIL", // list of receivers
    subject: 'A_SUBJECT', // Subject line
    text: '', // plaintext body
    link: document.getElementById('cloudinary'), // send email to recipient containing cloudinary link
    html: htmlBody // html body
  };
// send mail
  smtpTransport.sendMail(mailOptions, function(error, info) {
    if (error) {
      return res.notOk({
        status: 'error',
        msg: 'Email sending failed'
      })
    } else {
      console.log('Message %s sent: %s', info.messageId, info.response);
      return res.ok({
        status: 'ok',
        msg: 'Email sent'
      })
    }
    smtpTransport.close();
  });