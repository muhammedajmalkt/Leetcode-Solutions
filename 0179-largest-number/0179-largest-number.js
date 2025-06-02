/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let sort = nums.map(String).sort((a,b)=>(b+a) - (a+b)).join("")
console.log(sort)
 return sort[0] === '0' ? '0' : sort

    
};