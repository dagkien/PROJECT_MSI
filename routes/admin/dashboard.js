var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('dashboard.ejs');
});

module.exports = router;
