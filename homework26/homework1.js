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
    con.query(`SELECT* FROM tableInfo`, (err, result)=>{
      if (err) throw err
      console.log(result)
      
      result.forEach(element => {
          for(let key in element){
          res.write(`${key.toString()}: ${element[key].toString()}\n `)
          }
      })
      res.end()
    })
   
    
}).listen(8001)
