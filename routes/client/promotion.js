var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProduct = require('../../models/promotion'); 

router.get('/', function(req, res) {
     modelProduct.list( function(listPromotion) { 
          res.json(listPromotion);
     });
});

module.exports = router;