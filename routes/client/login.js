var express = require('express');
var router = express.Router();
var db=require('../../models/database'); 
var modelLogin = require('../../models/login'); 

router.get('/', function(req, res) {
    res.render("login.ejs");
});

router.get('/ApiLogin', function(req, res) {
    modelLogin.list( function(listUsers) { 
        res.json(listUsers);
    });
});
router.get('/update/:id', (req, res) => {
    let id = req.params.id;    
    modelLogin.read(id, function(u){
      res.json(u);
    });
});
router.put('/update/:id', (req, res)=> {
    let data = req.body;
    let id = req.params.id;
    modelLogin.update(id, data, function(){
        res.json({thongbao: 'Đã cập nhật user '});
    })
});

module.exports = router;