module.exports.currentTime = function(){
    let date = new Date()
    console.log(date)
}

module.exports.wordsFromString= function(text){
    let regex = /^[a-zA-Z0-9_.-]*$/
       let arr = text.split(" ")
       console.log(arr)
    for( let i = 0; i<arr.length; i++){
        let word = regex.test(arr[i])
       
        if(word){
            
            console.log(arr[i])
        }

    }
    
      
}


module.exports.charOneSecondOutput= function(str){
       let  text = str.trim()
       let i = 0
      let interval =  setInterval(function() {
        console.log( text[i++] )
        if (i === text.length) {
        clearInterval(interval)};
      }, 1000);

    
    }
     
    

