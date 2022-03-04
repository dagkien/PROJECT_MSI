var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProduct = require('../../models/product'); 

 router.delete('/delete/:id', (req, res)=> {
     let id = req.params.id;
     modelProduct.delete(id, function(){
         res.json({thongbao: 'Đã cập nhật user '});
     })
 });
module.exports = router;
