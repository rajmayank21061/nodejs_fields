const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport( {
    service:'gmail',
    auth: {
        user: 'rajmayank1944@gmail.com',
        pass: 'Password123@'
    }
});

const mailOptions = {
    from : 'rajmayank1944@gmail.com',
    to : 'mayankraj1944@gmail.com',
    subject : 'Sending Email Using NodeJs',
    text : 'The text is Hi Baby !'
}

transporter.sendMail( mailOptions,function(error,info){
    if(error){
        console.log("This is a error! " + error);
        
    } else {
        console.log("Email Sent to : " + info.response);
        
    }
})