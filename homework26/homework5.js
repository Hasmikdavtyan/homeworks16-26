const mysql = require('mysql')
const http= require('http')
const formidable = require('formidable')
const {Table} = require('./moduls/table.js')






const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
      
    
        if(req.url=='/form'){
            let form = new formidable.IncomingForm()
            form.parse(req, (err, fields)=>{
                if(err) throw err
                Table.sync().then(()=>{
                    Table.create({
                        title: fields.title,
                        description:fields.description,
                        content:fields.content
                        
                }).catch(err=>{
                    throw err
                }).finally(()=>{
                    conection.close()
                })
                })
                res.end( `  <form action="/form" method='post'>
                <input  name='title' type="text"><br>
                <p> ${ fields.title} </p>
    
                <input name='description' type="text"> <br>
                <p>  ${ fields.description}</p>
                <input  name='content' type="text"> <br>
                <p> ${ fields.content} </p>
                <input type="submit">
            </form>`)
            })
          
            


           
        } else{
               
                res.write(` <form action="/form" method='post'>
                <input  name='title' type="text"><br>
                <p> </p>

                <input name='description' type="text"> <br>
                <p> </p>
                <input  name='content' type="text"> <br>
                <p> </p>
                <input type="submit">
            </form>`)
                res.end()  
        
        }
    
}).listen(8001)
