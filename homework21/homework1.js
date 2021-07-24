const http = require('http');



const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
   
    if (req.url=='/sunny'){
        console.log('yes')
    }
    res.write( req.url)
    res.end()
}).listen(8000)