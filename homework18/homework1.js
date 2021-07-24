const fs = require('fs')
const stream1= fs.createWriteStream('homework1.txt',"utf8")


let prcInfo = process.versions
let data = new Date()
 for (let key in prcInfo){
    stream1.write(`${key}:${prcInfo[key]}\n `)
 }
stream1.write(` ${data}`)

 



