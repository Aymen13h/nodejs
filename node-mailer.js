var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aymen.kharrat13@gmail.com',
    pass: 'vgpd159'
  }
});

var mailOptions = {
  from: 'aymen.kharrat13@gmail.com',
  to: 'anisbenhalima209@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
const email=()=>{

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
