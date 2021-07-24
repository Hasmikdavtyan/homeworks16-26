const http = require('http');
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')



const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
   
    
    res.write(`<form action="/HR"  >
    <input type="text" name= 'name' > <br> <br>
    <textarea name="content" id="" cols="30" rows="10"></textarea>
    <input type="submit" value="submit">
      </form>`)

    let myUrl = url.parse(req.url, true).query
    
    fs.mkdir('Homework5', (err)=>{
     
        if (err){
               throw err
        }
        
      fs.writeFileSync(`./Homework5/${myUrl.name}.txt`, myUrl.content )

    })
      
         
     
     
res.end()
   
}).listen(8080)