var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProduct = require('../../models/product'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('add_product.ejs');
});
router.post('/add', (req, res) => {
    let data = req.body; 
    modelProduct.create(data , function(){
        res.json({thongbao:"Đã thêm  xong một user mới"});
    });
});

module.exports = router;
