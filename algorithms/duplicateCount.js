function duplicateCount(text){
    //...
    let count = 0
    let myText = text.toUpperCase()
    console.log(myText)
   
    
    for(let i = 0 ; i < myText.length  ; i++ ){
       
      if(myText.indexOf(myText[i]) === myText.lastIndexOf(myText[i])){

         count++
      
      }
     console.log(count)
    }
    console.log(count) 
    return count
  }
  duplicateCount("aabBcde")
module.exports = duplicateCount