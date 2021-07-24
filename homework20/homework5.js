const fs = require('fs')
  
 //const data = fs.statSync('./Homework5/ff.txt')
 //console.log(data)
 fs.mkdirSync('newDir')
 const data1 = fs.readdir('./Homework5', (err, data)=>{
     for(let key in data){
         let file = data[key]
        let stat = fs.statSync(`./Homework5/${file}`)
         if(stat.size> 1){
          fs.writeFileSync(`./newDir/${file}`)
         }

     }
    

 })
