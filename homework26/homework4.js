const mysql = require('mysql')
const http= require('http')
const formidable = require('formidable')

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
   
    
        if(req.url=='/submit'){
           let form = new formidable.IncomingForm()
           form.parse(req, (err, fields)=>{
               if(err) throw err
              
               con.query(`SELECT* FROM tableInfo WHERE name='${fields.name}' `, (err, result)=>{
                    res.end(`<h5>   ${fields.name}:  ${result[0].email}  </h5>`)
        }) 
           })


           
        } else{
            con.query(`SELECT* FROM tableInfo `, (err, result)=>{
                res.write(` <form action="/submit" method ='POST'> <select name="name" id=""> `)
                    if (err) throw err
                    result.forEach(element => {
                        let  name1 = element.name
                    res.write(`   <option >  ${ name1} </option>`)
                    });
                res.end(`   <input type="submit">  </select>  </form>`)  
        })
        }
    
}).listen(8001)
