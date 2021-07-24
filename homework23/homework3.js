const {EventEmitter} = require('events')

class myEmitter extends EventEmitter{
   constructor(rest){
    super()
    this.rest = rest
   }

   buy(count){
       return this.rest = this.rest - count
   }


}

let myEvent = new myEmitter(22)
myEvent.buy(2)


myEvent.on('count', ()=>{
    console.log(myEvent.rest)
})

myEvent.emit('count',)