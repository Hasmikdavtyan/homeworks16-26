const fs = require('fs');
const http = require('http');
const url = require('url')

const server = http.createServer((req,res)=>{
    const myUrlName = url.parse(req.url, true).query
  
    if(req.url =='/'){
        res.writeHead(200, {'Content-Type':'text/html'})

        res.write(` <form action="">
             <input type="text" name = 'name'><br>
             <textarea name="textarea" id="" cols="30" rows="10"></textarea>
             <input type="submit" >
             </form> `)
    } else {
        res.writeHead(200, {'Content-Type':'application/json'})
        res.write( JSON.stringify(myUrlName))
        console.log( myUrlName )
    }

     
    res.end( )
     
     
     
}).listen(8001)