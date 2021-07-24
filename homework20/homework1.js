const fs = require('fs')
const os = require('os')

 const userName = os.userInfo().username
 const userData = os.userInfo()
 console.log(userData)
     

 try {
let dataArr = [] 

for (let key in userData){
    dataArr.push( `${key}: ${userData[key]}\n`)
}
fs.writeFileSync(`${userName}.txt`, dataArr)
 } catch (e){
     console.error(e)
 }