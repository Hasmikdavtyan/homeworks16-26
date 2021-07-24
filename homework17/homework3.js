const fs = require('fs')
const os = require('os')
const random = require('random')
//task3

let i = 0
let arr = []
while (i< 8){
 let num = random.int(0, 9)
   arr.push(num)
   i++

}

let fileName = arr.join('').toString()

fs.writeFile(`${fileName}.txt`, os.cpus().length,()=>{
    
})
