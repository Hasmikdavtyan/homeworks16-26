const fs = require('fs');
const zlib = require('zlib')

const readStream = fs.createReadStream('homeworks.txt.gz')
const writeStream = fs.createWriteStream('homework1.txt')
const gunZip =zlib.createGunzip()

readStream.pipe(gunZip).pipe(writeStream)





