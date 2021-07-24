const http = require('http')
const fs  = require('fs')
const event = require('events')
const formidable  = require('formidable')




const server = http.createServer((req, res)=>{
   if(req.url == '/image'){

       let imgForm = new formidable.IncomingForm()
       imgForm.parse(req, function(err, fields, files){
           if(err) {
               throw err
           }
          
             let dat = JSON.stringify(files)
             console.log(dat)
             console.log(__dirname)
             let oldPath = files.img.path 
             let newPath= `${__dirname}\\${files.img.name}`
             res.writeHead(200, { 'Content-Type': 'image/jpeg'})

             fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;
                let data =  fs.readFileSync(`${files.img.name}`)
                res.write(data)
                res.end()
            })
            
          
       })
   } else {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write(`<form action="/image" method = "post" enctype="multipart/form-data">
    <input type='file' name = 'img'>
    <input type="submit" name="submit" id="1">
</form>`)

   res.end()
}
    
}).listen(8001)