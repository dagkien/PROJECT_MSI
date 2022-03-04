var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelProduct = require('../../models/product'); 

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    res.render('update_product.ejs', {id : id});
});
router.get('/update/:id', (req, res) => {
    let id = req.params.id;    
    modelProduct.read(id, function(u){
      res.json(u);
    });
});
router.put('/update/:id', (req, res)=> {
    let data = req.body;
    let id = req.params.id;
    modelProduct.update(id, data, function(){
        res.json({thongbao: 'Đã cập nhật user '});
    })
});
router.delete('/delete/:id', function(req, res) { 
    let id = req.params.id;
    let sql = 'DELETE FROM products WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        res.json({thongbao: 'Đã xóa thành công'});
    }); 
});


module.exports = router;
