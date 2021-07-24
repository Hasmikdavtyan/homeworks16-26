const fs = require('fs')

const readStream = fs.createReadStream('homework5Eng.txt', {
    highWaterMark: 1
})
const writeStream = fs.createWriteStream('homework5.txt', 'utf8')


readStream.on('data', chunk =>{
    let char = chunk.toString().trim().toLowerCase()
     console.log(char)
    switch(char){
        case 'a':
            writeStream.write('ա');
        break;
        case 's':
            writeStream.write('ս');
        break;
        case 'n':
            writeStream.write('ն');
        break;
        case 'y':
            writeStream.write('ի');
        break;
        case 'u':
            writeStream.write('ու');
        break;
        case 'c':
            writeStream.write('ք');
        break;
        case 'l':
            writeStream.write('լ');
        break;
        case 'o':
            writeStream.write('օ');
        break;
        case 'oo':
            writeStream.write('ու');
        break;
        case 'h':
            writeStream.write('հ');
        break;
        case 'k':
            writeStream.write('կ');
        break;
        case 'j':
            writeStream.write('ջ');
        break;
        case 'i':
            writeStream.write('Ի');
        break;
        case 'm':
            writeStream.write('մ');
        break;
        case ',':
            writeStream.write(',');
        break;
        case '.':
                writeStream.write(':');
        break;
         case ';':
            writeStream.write(';');
        break;
        case '0':
            writeStream.write('0');
             break;
        case '1':
        writeStream.write('1');
         break;
         case '2':
        writeStream.write('2');
         break;
         case '3':
        writeStream.write('3');
         break;
         case '4':
        writeStream.write('4');
         break;
         case '5':
        writeStream.write('5');
         break;
         case '6':
        writeStream.write('6');
         break;
         case '7':
            writeStream.write('7');
             break;
         case '8':
        writeStream.write('8');
         break;
         case '9':
            writeStream.write('9');
             break;
         default:
            writeStream.write(' ');

        
    }
})



