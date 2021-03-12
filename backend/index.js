const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

router.post("/contact", (req, res) => {

    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Organization: ${req.body.organization}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    transporter.verify((err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Server is ready to take messages");
        }
    })

    let mailOptions = {
        from:  process.env.EMAIL_USER,
        to: process.env.EMAIL_DEST,
        subject: 'Portfolio Contact',
        text: 'Hello world?',
        html: output
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return console.log(err);
        }
        console.log('Message sent: %s', info.messageID);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

});

app.listen(8000, () => console.log("Server running on port 8000"));
