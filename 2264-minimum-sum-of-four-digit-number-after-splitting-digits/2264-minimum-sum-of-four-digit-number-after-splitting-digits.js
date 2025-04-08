/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
const val= num.toString().split("").sort((a,b) => a-b)
const a=val[0]+val[2]
const b=val[1]+val[3]

console.log(parseInt(a)+parseInt(b))
return parseInt(a)+parseInt(b)

};