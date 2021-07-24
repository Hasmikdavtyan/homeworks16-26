const http = require('http')
const fs  = require('fs')
const event = require('events')

let homeWork = new event.EventEmitter()



 


 const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write(` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`)
    let handler = function(){
        let data = fs.readFileSync('homework.txt', 'utf8')
       
        res.end( (data.toString().trim()))
    }
      
    homeWork.on('data', handler)
    homeWork.emit('data')
    
    

}).listen(8000)