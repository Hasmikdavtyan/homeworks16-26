const fs = require('fs')

const data = new Date()
const newName = `${data.getMonth()}_${data.getDay()}_${data.getHours()}_${data.getMinutes()}_${data.getSeconds()}_`

fs.rename('User.txt', `${newName}.txt`,(err )=>{
  if(err){
      console.error(err)
  }
} )