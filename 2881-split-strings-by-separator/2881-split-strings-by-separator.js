/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
// let words = ["|||"], separator = "|"
let arr=[]
for(let i=0;i<words.length;i++){
   let y= words[i].split(separator).filter((item)=>item !== "")
   arr.push(...y)
}

console.log(arr)
return arr
};