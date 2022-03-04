var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProduct = require('../../models/product'); 

router.get('/productApi', function(req, res) {
     modelProduct.list( function(listProducts) { 
          res.json(listProducts);
     });
});
router.get('/', function(req, res) { 
     res.render("product.ejs");
});

module.exports = router;