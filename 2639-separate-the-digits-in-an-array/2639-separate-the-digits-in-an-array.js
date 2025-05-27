/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr= []
    for(i of nums){
    arr.push( i.toString().split(""))   
    }
console.log(arr.flat().map(Number))
return arr.flat().map(Number)
};