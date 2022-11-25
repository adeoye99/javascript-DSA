function duplicateEncode(word){
    let count = ""
     const myWord = word.toUpperCase()
   
     for (let i = 0 ; i < myWord.length ; i++){
        
        if(myWord.indexOf(myWord[i]) === myWord.lastIndexOf(myWord[i])){
            count += "("
        
        }else{
            count += ")"
        }
        
     }
     return count
   
    
}

duplicateEncode("success")
module.exports = duplicateEncode