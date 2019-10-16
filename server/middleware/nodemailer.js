/**
 * This function sends cloudinary link containing attachment to recipient 
 * @param {object} req
 * @param {object} res
 * @returns {object} next middleware
 */

export const sendLink = (req, res, next) => {
    //using test account for now
    let testAccount = await nodemailer.createTestAccount();

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
    let info = await transporter.sendMail({
        from: '', // sender address
        to: '', // list of receivers
        subject: '', // Subject line
        text: 'Hello world?', // plain text body
        attachments: [
            {
                filename: '',
                path: '' //path to cloudinary file
            },
        ]
    });

    // send confirmation to user
}