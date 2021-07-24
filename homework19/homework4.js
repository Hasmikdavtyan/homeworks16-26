const {Transform} = require('stream')
const fs = require('fs')

const myStream = new Transform({
    transform(chunk,encoding,callback){
        let arr = []
         let transformChunk =  chunk.toString().split(' ').forEach((element, index )=> {
               
             if(index%2==0){
          arr.push(element.toString())
         
             }
         });

        

    this.push( arr.toString() )
    callback()
}

}
)

const readStreame = fs.createReadStream('input.txt')
const writeStreame = fs.createWriteStream('homework4.txt')

readStreame.pipe(myStream).pipe(writeStreame)
