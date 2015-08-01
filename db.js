var mysql = require("mysql");
var connection = mysql.createPool({
   host: process.env.IP,
   user: process.env.C9_USER,
   password: '',
   database: 'c9'
});

connection.getConnection(function(err, conn){
   if(err) {
       console.log('Could not connect to database ' + err.stack);
   }
   console.log('Successfully connected to mysql database');
});

module.exports = connection;