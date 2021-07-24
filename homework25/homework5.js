const http = require('http')
 const formidable = require('formidable')
const  fs  = require('fs')
const {Table} = require('./moduls/table.js')




  const server = http.createServer( (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    
     if(req.url =='/user') {
       
       let form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files)=>{
            if (err) throw err
            
            var users = {
                name : fields.name,
                lastname :fields.lastname,
                age:fields.age,
                email : fields.email,
            }
            
             console.log(users)
            Table.sync().then(()=>{
                Table.create({
                    name: users.name,
                    lastName:users.lastname,
                    age:users.age,
                    email:users.email 
            }).catch(err=>{
                throw err
            }).finally(()=>{
                conection.close()
            })
            })
            
        })

        res.end()
      }else{
         res.write(`
        <form action="/user" method="POST">
         <input type="text" name = 'name'> <br>
         <input type="text" name = 'lastname'> <br>
         <input type="email" name = 'email'> <br>
         <input type="number" name = 'age'>  <br>
         <input type="submit" >
         
       </form>`)
       res.end()
      }
     

  }).listen(8004)

