var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProductDetail = require('../../models/product'); 

router.get('/ApiProduct_deatil/:id', (req, res) => {
    let id = req.params.id;    
    modelProductDetail.read(id, function(u){
    res.json(u);
    });
});
router.get('/:id', function(req, res, next) {
var id = req.params.sqId;
res.render("detailProduct.ejs", {id:id});
});

module.exports = router;