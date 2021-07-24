const fs = require('fs');
const http = require('http');


const server = http.createServer((req,res)=>{
     
    
    res.writeHead(200, {'Content-Type': 'text/html'})
      /*let readStream= fs.createReadStream('homework1.1.js')
       readStream.pipe(res)*/
      res.write (`<script> for(let i = 0; i<=100; i++){
         document.write(i + '<br>')
     } </script>`)
         res.end()
     
}).listen(8000)