var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProduct = require('../../models/product'); 

router.get('/', function(req, res, next) {
    res.render('products_admin.ejs');
});
router.post('/', (req, res) => {
    let data = req.body; 
    modelProduct.create(data , function(){
        res.json({thongbao:"Đã thêm  xong một user mới"});
    });
});
router.get('/:id', (req, res) => {
    let id = req.params.id;    
    modelProduct.read(id, function(u){
      res.json(u);
    });
});
router.put('/:id', (req, res)=> {
    let data = req.body;
    let id = req.params.id;
    modelProduct.update(id, data, function(){
        res.json({thongbao: 'Đã cập nhật user '});
    })
});

module.exports = router;
