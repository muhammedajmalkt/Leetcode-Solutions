/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let str=n.toString().split("")
    let mul=str.reduce((acc,crv)=>parseInt(acc) *parseInt(crv))
    let add=str.reduce((acc,crv)=>parseInt(acc) +parseInt(crv))
    return mul-add
};