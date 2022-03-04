var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modalOrder = require('../../models/order');

router.get('/', function(req, res, next) {
    res.render('orders.ejs');
});

router.get('/orderApi', function(req, res) {
    modalOrder.list( function(listProducts) { 
         res.json(listProducts);
    });
});

router.post('/payment', (req, res) => {
    let data = req.body; 
    modalOrder.create(data , function(){
        res.json({thongbao:"Đã thêm  xong một user mới"});
    });
 });

module.exports = router;
