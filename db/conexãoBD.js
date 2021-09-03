const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root2',
  password : '1234',
  database : 'testeapiedu'
});

module.exports = connection;