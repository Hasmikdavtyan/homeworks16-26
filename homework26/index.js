const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'homework1'

})

con.connect(err=>{
    if (err) throw err
    console.log('connected')
    
})

con.query(`CREATE DATABASE IF NOT EXISTS Homework1 `, (err, result)=>{
    if (err) throw err 
})


let tableInfo = (`CREATE TABLE IF NOT EXISTS tableInfo
(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)  not null,
email VARCHAR(50) not null,
mobile int not null
)`)

con.query(tableInfo, (err,result)=>{
    if (err) throw err   
})

let columnInfo = `INSERT INTO tableInfo (id, name, email, mobile)
VALUES ('1', 'Hasmik', 'hasmik.davtyan.95@gmail.com', '077767990'),
    ('2', 'Gexam', 'gexam.gevorgyan.95@gmail.com', '045787990'),
    ('3', 'Ani', 'ani.davtyan.95@gmail.com', '055648990'),
    ('4', 'Vazgen', 'vazgen.davtyan.95@gmail.com', '077547990'),
    ('5', 'Sveta', 'sveta.davtyan.95@gmail.com', '077457890'),
    ('6', 'Karo', 'karo.davtyan.95@gmail.com', '09345120')`

    con.query(columnInfo, (err, info)=>{
        if (err) throw err 
    console.log(info)
    })