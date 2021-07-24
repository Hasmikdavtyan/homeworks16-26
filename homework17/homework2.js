const fs = require('fs')
const os = require('os')
// task2

let ip = os.networkInterfaces()

for( let el in ip){
    let data= ip[el]

    for (let i = 0; i < data.length; i++){
     if(data[i].family=="IPv4" && !data[i].internal){
         console.log(data[i].address)
     }
    }
}
