/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    
let g =Math.abs( num.toString().split("").reverse().join(""))
let d= Math.abs( g.toString().split("").reverse().join(""))
if(d === num){
console.log(true)
return true
}else{
    console.log(false)
    return false

}
};