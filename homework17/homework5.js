const http = require('http')
const fs = require('fs')
const os = require('os')

let homework1 = fs.readFileSync('homework1.js', 'utf8')
let homework2 = fs.readFileSync('homework2.js', 'utf8')
let homework3 = fs.readFileSync('homework3.js', 'utf8')
let homework4= fs.readFileSync('homework4.js', 'utf8')

let date = new Date()
let myDate = `_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}` 
let fileName = os.platform()+ myDate
console.log( fileName )

fs.writeFileSync(`${fileName}.txt`, homework1)
fs.writeFileSync(`${fileName}.txt`, homework2)
fs.writeFileSync(`${fileName}.txt`, homework3)
fs.writeFileSync(`${fileName}.txt`, homework4)





