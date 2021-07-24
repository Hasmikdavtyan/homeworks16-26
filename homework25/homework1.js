
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    
    user: "root",
    password: "123456",
    
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

con.query('CREATE DATABASE IF NOT EXISTS Hasmik', ( err, result)=>{
    if(err) throw err
    console.log('database created')
    console.log(result)

 })


