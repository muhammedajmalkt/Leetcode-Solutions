/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let y =n.toString().split("").sort((a,b)=>b-a)

return y[0]*y[1]
};