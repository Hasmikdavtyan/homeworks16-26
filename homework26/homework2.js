const mysql = require('mysql')
const http= require('http')

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

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(`<ol>`)
    con.query(`SELECT* FROM tableInfo`, (err, result)=>{
            if (err) throw err
            let myObj = result[0]
            for(let key in myObj){
            res.write(` <li>${key.toString()}: ${myObj[key].toString()}\n  </li>`)
            }
    res.end(`</ol>`)
    })
   
    
}).listen(8001)
