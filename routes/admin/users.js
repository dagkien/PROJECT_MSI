var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modalUser = require('../../models/login');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users.ejs');
});

router.get('/userApi', function(req, res, next) {
  modalUser.list(function(listUser) {
    res.json(listUser);
  })
});

router.post('/addUser', (req, res) => {
  let data = req.body; 
  modalUser.create(data , function(){
    res.json({thongbao:"Đã thêm  xong một user mới"});
  });
});

module.exports = router;
