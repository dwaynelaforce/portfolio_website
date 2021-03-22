const nodemailer = require('nodemailer');
const emailSettings = require('./emailSettings.js')
const transporter = nodemailer.createTransport(emailSettings);

module.exports = (app) => {
    app.post('/api', (req, res) =>{
        // examine the post request
        const {name, email, message} = req.body;
        
        // compose the email
        const mailOptions = {
            from: email,
            to: 'dwayne.laforce@gmail.com',
            subject: `Website contact from ${name} ${email}`,
            text: `name: ${name}
                \nemail: ${email}
                \nmessage: ${message}`
        }
        
        // then send the email
        transporter.sendMail(mailOptions, (err, info) =>{
            if (err) {
                res.json({message:"nodemailer error"})
            } else {
                res.json({message:"email sent successfully"})
            }
        })
    })
}