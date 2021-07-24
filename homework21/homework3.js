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


      if (req.method === 'POST'){
          let info = ''
         req.on('data', (chunk)=>{
             
              info+= chunk.toString()
             
             })

         req.on('end', ()=>{
            let q = querystring.parse(info)
            fs.rename('homework3.txt', `${q.name}.txt`, ()=>{
                res.end('Done')
            })
            
        })
  

      }

     
    
     

   
}).listen(8080)