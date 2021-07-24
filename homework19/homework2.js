const fs = require('fs');
const crypto = require('crypto')

const algorithm = 'aes-256-cbc'
const password =  process.version.toString()

const key = crypto.scryptSync(password, 'salt', 32)
const iv = Buffer.alloc(16,0)

const ciper = crypto.createCipheriv(algorithm, key,iv)


const writeSteam = fs.createWriteStream('homework2c.txt')
const readSream = fs.createReadStream('Homeworks.txt')

readSream.pipe(ciper).pipe(writeSteam)
