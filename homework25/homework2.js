const mysql = require('mysql')

let con = mysql.createConnection( {
    host:'localhost',
    user: 'root',
    password:'123456',
    database:'Hasmik'
}
)

con.connect((err)=>{
    if(err) throw err
    console.log('conected')
})
let tableColumns = (`CREATE TABLE IF NOT EXISTS users 
    (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(50) not null,
    number int not null,
    message text not null
    )`)
con.query(tableColumns, (err,info)=>{
    if(err) throw err
    console.log(info)
})