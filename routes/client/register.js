var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 

router.get('/', function(req, res, next) {
  res.render('register.ejs');
});

module.exports = router;