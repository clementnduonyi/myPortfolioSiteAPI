const nodemailer = require('nodemailer');
const config = require("../config");

exports.contacts = async (req, res) => {
    const {subject, name, email, phone, message, projectTitle, budget} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.GMAIL_USERNAME,
            pass: config.GMAIL_PASSWORD
        }
    })
    try{
        const emailRes = await transporter.sendMail({
            from: email,
            to: 'meggaclem@gmail.com',
            subject: subject,
            html: `
            <p><strong>Name: </strong> ${name}</p><br>
            <p><strong>email: </strong> ${email}</p><br>
            <p><strong>Phone: </strong> ${phone}</p><br>
            <p><strong>Message: </strong> ${message}</p>
            <p><strong>Project title: </strong> ${projectTitle}</p>
            <p><strong>Budget: </strong> ${budget}</p>
            `
        });
        console.log('Message sent', emailRes.messageId)
        
    }catch(e){
        console.log(e)
    }
   

       
       res.status(200).json(req.body)
    
}


