function filter_list(l) {
    
      
    let newArray =  l.filter((item)=>{ return typeof(item) != 'string' })
    console.log(newArray)
    return newArray
      
    
  }

  filter_list([1,'a','b',0,15])
  module.exports = filter_list