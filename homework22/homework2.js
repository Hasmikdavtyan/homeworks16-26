const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
     
    
      let readStream= fs.createReadStream('sunny.jpg')
        if(req.url == '/sunny'){
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        readStream.pipe(res)
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        const data =  fs.readFileSync('404.html')
          res.write(data)
          res.end()
      }
    
     
     
     
}).listen(8001)