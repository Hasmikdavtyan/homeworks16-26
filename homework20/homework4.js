const fs = require('fs')

 let web =['html','css','js','php']

fs.mkdirSync("web")
//fs.opendirSync('web')

        for (let i =0; i< web.length; i++){
            fs.writeFileSync(`./web/${web[i]}.${web[i]}`, web[i] )
           }
        
       
       
   
  
  
  
 