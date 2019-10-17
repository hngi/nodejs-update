/**
 * This function sends cloudinary link containing attachment to recipient 
 * @param {object} msg
 * @param function error
 * @param function success
 */

const nodemailer = require('nodemailer');

const sendLink = (msg, error, success) => {
    //using xshareng@gmail.com account
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: "xshareng@gmail.com", // senders address
            pass: "nodejs-update" // generated password
        },
        
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: "xshareng@gmail.com", // senders address
        to: msg.to, // receivers address
        subject: msg.subject, // Subject line
        text: msg.text || '', // plain text body
        html: msg.html || '', // html texts
        attachments: msg.attachments || '' // this should be an array of objects with filename and path properties
    }, (err, succ)=>{
        // send confirmation or error through callback function
        (err) ? error(err) : success(succ);
    });

}

/*
* example
* sendLink({
*     "to": "micaiah.effiong@gmail.com",
*     "subject": "test",
*     "text": "I have arrived"
* }, console.log, console.log);   
*/

module.exports = sendLink;