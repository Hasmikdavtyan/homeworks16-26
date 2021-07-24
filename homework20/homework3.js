const fs = require('fs')
const text = ' Sunny,  School,  Node.JS'

const file = fs.writeFileSync('homework3.txt', text)
const data = fs.readFileSync('homework3.txt', 'utf8')

const newData = data.replace(/,/g, ' ')
fs.writeFileSync('replace.txt',newData)
fs.unlink('homework3.txt', (err)=>{
     if (err){
         throw err
     }
  })
