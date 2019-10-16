const nodemailer = require('nodemailer');

const sendLink = (req, res, next) => {
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
        from: '', // sender address
        to: '', // list of receivers
        subject: '', // Subject line
        text: 'Hello world?', // plain text body
        html: '', // html texts
        attachments: [
            {
                filename: '',
                path: '' //path to cloudinary file
            },
        ]
    }, (err, succ)=>{
        return (err) ? err : succ;
    });

    // send confirmation to user
    next();
}

module.exports = sendLink;