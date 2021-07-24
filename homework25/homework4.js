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

let rowInfo = ` INSERT INTO users (id, email, number, message )
VALUES('2','davit.davtyan@gmail.com', '077212585', 'hallo world'),
      ('3','Anahit.davtyan@gmail.com', '077542185', 'hallo Armenia')`

con.query(rowInfo, (err, info)=>{
    if(err) throw err
})
})
