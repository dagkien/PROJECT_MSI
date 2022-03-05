var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'sql6.freemysqlhosting.net', 
   user: 'sql6476958', 
   password: 'KhWDVxnrQE', 
   database: 'sql6476958'
}); 
db.connect(() => console.log('Da ket noi database !'));
module.exports = db; 
