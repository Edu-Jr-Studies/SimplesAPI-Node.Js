const bancoBD = require('./db/conexãoBD')
bancoBD.connect()
  bancoBD.query('SELECT * FROM  teste', (err, res) => {
    if(err) throw err 
    console.log(res)
  });
bancoBD.end()