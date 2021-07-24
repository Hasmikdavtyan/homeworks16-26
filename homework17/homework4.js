const fs = require('fs')

//task4

fs.readFile('input.txt',(err,data)=>{
    if(err)  return console.error()
    let text = data.toString()
      let newText = text.split(' ').join('_')
       
    console.log(newText)
    fs.writeFile('write.txt' , newText, (err)=>{
       if(err)  return console.error()
       console.log('Done!')
    })
   })
   