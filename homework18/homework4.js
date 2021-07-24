const fs = require('fs')
let writeStreme = fs.createWriteStream('homework4.txt','utf8')

 

process.stdin.on('data', (chunk) => {
   
process.stdin.pipe(writeStreme)
   
}
)
  



