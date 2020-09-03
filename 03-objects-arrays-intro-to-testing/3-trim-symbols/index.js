/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if(size === 0){
    return string = ""
  }else if(size === false){
    return string
  }else{
  let newStr = "";
  let a = 1
  for(let i=0; i < string.length; i++){
    if(string[i] === string[i-1]){
      a++
      if(a > size){
        continue
      }else{
        newStr += string[i]
      }
    }else{
      newStr += string[i]
      a=1}
  }
  return string = newStr}
}
