var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelCategory = require('../../models/category'); 

router.get('/', function(req, res) {
    modelCategory.list( function(listCategories) { 
         res.json(listCategories);
    });
});

module.exports = router;