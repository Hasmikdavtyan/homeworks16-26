const http = require('http');
const url = require('url')
const querystring = require('querystring')



const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
   
    
    res.write(`<form action="/HR" >
    <input type="text" name= 'name'>
    <input type="submit" value="submit">
      </form>`)

    let urlInfo = url.parse(req.url)
    let q = querystring.parse(urlInfo.query)
    console.log(q.name)


    res.end(q.name)
}).listen(8080)