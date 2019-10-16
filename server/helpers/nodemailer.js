/**
 * This function sends cloudinary link containing attachment to recipient 
 * @param {object} msg
 * @param function error
 * @param function success
 */

const nodemailer = require('nodemailer');

const sendLink = (msg, error, success) => {
    //using test account for now
    let testAccount = nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user, // generated user
            pass: testAccount.pass // generated password
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '', // include senders address
        to: msg.to, // list of receivers(address)
        text: msg.text || '', // plain text body
        attachments: msg.attachments // this should be an array of objects with filename and path properties
    }, (err, succ)=>{
        // send confirmation or error through callback function
        (err) ? error(err) : success(succ);
    });

}

module.exports = sendLink;
