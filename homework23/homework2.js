const http = require('http')
const event = require('events')

let  event3 = new event.EventEmitter()
var count=0 ;


let handler = function(){
    console.log('Hallo World')
    count++
    console.log(count)
    if(count ==3){
       event3.removeListener('data',handler)
   }
   
   
}
 
event3.on('data', handler)
event3.emit('data')
event3.emit('data')
event3.emit('data')
event3.emit('data')
event3.emit('data')
event3.emit('data')
