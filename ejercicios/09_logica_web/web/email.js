var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.domain.com',
  port: 587,
  secure: false,
  requiresTLS: true,
  auth: {
    user: 'you@domain.com',
    pass: 'your-password'
  }
});

function sendMail(emailOptions) {
  transporter.sendMail({
    from: 'you@domain.com',
    to: 'you@domain.com',
    subject: emailOptions.subject,
    text: emailOptions.text
  }, (error) => {
    if (error) {
      console.log('Error sending email', error);
    } else {
      console.log('Email sent');
    }
  });
}

module.exports = sendMail;
