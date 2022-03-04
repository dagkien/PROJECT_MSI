var db=require('./database'); 

exports.list = function( callback) { 
    let sql = `SELECT *  FROM promotion`;
    db.query(sql, function(err, d) { callback(d); }  );
}


