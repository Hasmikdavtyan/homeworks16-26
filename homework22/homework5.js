const fs = require('fs');
const http = require('http');
const { type } = require('os');
const url = require('url');


const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    let data = fs.readFileSync('homework.txt', 'UTF8')
    const str = data.toString( ).split('\n\r')
    let pArr = []
    
    for(let i= 0; i< str.length; i++){
        res.writeHead(200, {'Content-Type':'text/html'})
       
        pArr.push( '<p>'+ str[i] + '</p> ')
       
      
    }





    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`)

       

    
    
    res.write(pArr2.toString())

     
    
    res.end(`<script>
    let p = document.getElementsByTagName('p')
    
    var i =0 
    for(let key of p){
        console.log(key)
        key.style.visibility = 'hidden'
    }

    let timer = setInterval(function(){
        p[i].style.visibility='visible'
        i++
        if(i==5){
            clearInterval(timer)
        }
      }, 1000)


    

    
</script>` )
     
     
     
}).listen(8001)

