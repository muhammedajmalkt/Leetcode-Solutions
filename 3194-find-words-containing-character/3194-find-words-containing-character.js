/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const arr =[]
  for(let i=0;i<words.length;i++){
   const find= words[i].includes(x)
if(find){
//   const index=words.indexOf(words[i])
  arr.push(i)
}
}
return arr
    
};