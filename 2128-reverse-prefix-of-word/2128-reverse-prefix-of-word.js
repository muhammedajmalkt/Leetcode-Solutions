/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
 let arr= word.split("")
 let len= word.indexOf(ch)
if(arr.includes(ch)){
  let rev= arr.slice(0,len+1).reverse();
       arr.splice(0,len+1)
   
let cc = rev.concat(arr).join("")
    return cc
}else{
    return word
}

}