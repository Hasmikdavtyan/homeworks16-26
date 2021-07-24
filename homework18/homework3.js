const fs = require('fs')

const writePrimeStream = fs.createWriteStream('prime.txt', 'utf8')
const writeNonPrimeStream = fs.createWriteStream('notPrime.txt', 'utf8')


for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
           
        }
    }
    if (notPrime === false) {
        writePrimeStream.write(`${counter.toString()};`)   
    }

    if (notPrime === true) {
        writeNonPrimeStream.write(`${counter.toString()};`)
    }
    

}


