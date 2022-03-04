var express = require('express');
var nodemailer =  require('nodemailer'); // khai báo sử dụng module nodemailer
var router = express.Router();
var db=require('../../models/database'); 
var modelLogin = require('../../models/login'); 

router.get('/', function(req, res) {
    res.render("forgotpass.ejs");
});


router.post('/send', function(req, res, next) {    
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: 'kiendang222@gmail.com',
            pass: '0986961905'
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'MSI',
        to: 'kiendang712002@gmail.com',
        subject: 'Mật Khẩu mới của bạn',
        text: 'You recieved message from ' + req.body.email,
        html: '<b>Password:' + req.body.password +'</b><div>Chân thành cảm ơn!<div>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/product');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/login');
        }
    });
});


module.exports = router;