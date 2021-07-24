const fs = require('fs');
const crypto = require('crypto')

const algorithm = 'aes-256-cbc'
const password =  process.version.toString()

const key = crypto.scryptSync(password, 'salt', 32)
const iv = Buffer.alloc(16,0)

const deChiper = crypto.createDecipheriv (algorithm, key,iv)


const writeSteam = fs.createWriteStream('homework3.txt')
const readSream = fs.createReadStream('homework2c.txt')

readSream.pipe(deChiper).pipe(writeSteam)
