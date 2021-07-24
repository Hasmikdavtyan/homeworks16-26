const http = require('http');
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')



const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
   
    
    res.write(`<form action="/HR" method='POST' >
    <input type="text" name= 'name'>
    <input type="submit" value="submit">
      </form>`)


      let data = fs.readFileSync('sunny.txt')

       let info = ''
         req.on('data', (chunk)=>{
               info+= chunk.toString().trim()
          })

          req.on('end', ()=>{
            let q = querystring.parse(info)
            if ( q.name == 'sunny'){
                res.write(data)
               res.end()
            }else{
                res.end()
            }
           
          })

         
     
     

   
}).listen(8080)