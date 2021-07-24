const {Transform} = require('stream')
const fs = require('fs')


class RemoveSpecialChars  extends Transform {
    constructor() {
      super();
  
     
    }
  
    _transform(chunk, encoding, callback){
        let regex = /[^\w\s]/gi
        let string = chunk.toString()
        let result = string.replace( regex, ' ');
        console.log(result);
         this.push(result)
         callback()
         
      }
    
    
  }


  

let TrnsformStream = new RemoveSpecialChars()

let writeSream = fs.createWriteStream('homework5s.txt')
let readSream = fs.createReadStream('homework5r.txt')

readSream.pipe(TrnsformStream).pipe(writeSream)


