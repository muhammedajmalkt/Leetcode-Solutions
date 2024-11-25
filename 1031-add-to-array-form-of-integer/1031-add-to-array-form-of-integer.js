/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let x=num.join("")
    let y=BigInt(x)+BigInt(k)
    let arr=y.toString().split("").map((item)=>parseInt(item))
    return arr
    
    
};