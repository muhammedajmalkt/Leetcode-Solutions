/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
 const g=BigInt(digits.join(""))
const add= String(g+1n).split("").map(Number)
console.log(add)
return add
    
    
      
};