const fs = require('fs');
const http = require('http');
const url = require('url')

const server = http.createServer((req,res)=>{
     res.writeHead(200, {'Content-Type':'text/html'})
    
    const myUrlName = url.parse(req.url, true).query.name
    if(req.url =='/'){
        res.write(` <form action="">
             <input type="text" name = 'name'>
             <input type="submit" >
             </form> `)
    }else if(myUrlName =='form'){
            const data = fs.readFileSync('form.html')
            res.write(data)
    } else{
           const data2 = fs.readFileSync('404.html')
           res.write(data2)
        
       }
    res.end()
     
     
     
}).listen(8001)