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
    res.write(`<table style="width:100%; border: 2px solid black"> `)
    con.query(`SELECT* FROM tableInfo ORDER BY email ASC`, (err, result)=>{
            if (err) throw err
          /*   result.forEach(element => {
                for(let key in element){
                   return (`<td> ${element[key]} </td> `)
                }})*/
            let myObj = result[0]
            res.write( ` <tr style ='display:inline;    margin-left:50px;'>`)
            for(let key in myObj){
             res.write(`   <td style="  width:200px; padding-left:15px;padding-bottom:3px;" > <strong > ${key.toString()} </strong> </td>`)
            }
            res.write(`</tr>`)
           
            result.forEach(element => {
                res.write( ` <tr style ='display:inline;  margin-left:30px;'>`)
                for(let key in element){
                   res.write (` <td style="   margin-left:25px; align-content: center;  width:100px; padding-left:70px;padding-bottom:3px;"> ${element[key]} </td>  `)
                }
                res.write(`</tr>`)
            })
           
             
            res.end(`</table>`)
   
    })
           
    

}).listen(8001)
