var db=require('./database'); 

exports.list = function( callback) { 
    let sql = `SELECT *  FROM category`;
    db.query(sql, function(err, d) { callback(d); }  );
}
exports.create = function(data, callback ) { //hàm chèn user mới vào table 
    let sql = 'INSERT INTO category SET ?';
    db.query(sql, data, function(err, d) { callback(d) }  );    
} 
exports.update = function(id, data, callback) { 
    let sql = 'UPDATE category  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    let sql = 'SELECT * FROM category WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        let sql2 = `select * from products WHERE id_category = ${id}`;    
        db.query(sql2, id, (err, d) => {
            if (err) throw err;
            callback();
        });
    });
} 

exports.delete = function(id,callback) {
    let sql = 'DELETE FROM category WHERE id = ?'   
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        res.json({thongbao: 'Đã xóa thành công'});
        callback();
    });
}

