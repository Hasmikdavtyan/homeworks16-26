const http = require('http')
const fs  = require('fs')
const event = require('events')
const formidable  = require('formidable')
const random = require('random')

const nameGenerator = ()=>{
    let name = ''
    for(let i=0; i<5; i++){
       name+= random.int(0, 100) 
    }
    return name
}

console.log(nameGenerator())


const server = http.createServer((req, res)=>{
   if(req.url == '/file'){

       let imgForm = new formidable.IncomingForm()
       imgForm.parse(req, function(err, fields, files){
           if(err) {
               throw err
           }
          
             let dat = JSON.stringify(files)
             console.log(dat)
             let oldPath = files.file.path 
             let newPath= `${__dirname}\\upload\\${nameGenerator()}${files.file.name}`
             res.writeHead(200, { 'Content-Type': 'image/jpeg'})

             fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;
               
            })
            res.end() 
          
       })
   } else {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write(`<form action="/file" method = "post" enctype="multipart/form-data">
    <input type='file' name = 'file'>
    <input type="submit" name="submit" id="1">
</form>`)

   res.end()
}
    
}).listen(8001)