const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'Hasmik'
})

con.connect(err=>{
    if (err) throw err
    console.log('conected')

     let rowContent = `INSERT INTO users (id, email,number,  message)
      VALUES ('1', 'hasmik.davtyan.95@gmail.com','077767990', 'Hello dear')` 

con.query(rowContent, (err, info)=>{
    if(err) throw err
    console.log(info)
})
})




