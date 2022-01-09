require('dotenv').config();
const nodemail = require('nodemailer')


//step 1
let transporter = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    },


});

//step 2
let mailOptions = {
    from: 'sender@gmail.com',
    to: 'receiver@gmail.com',
    subject: 'Testing E-mail',
    text: 'Hello, This is email testing',
    attachments: [{
        filename: 'text.txt',
        path: './text.txt'
    }]
}

//step 3
transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Email Sent !");
    }
});