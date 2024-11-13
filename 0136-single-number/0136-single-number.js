/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result=0
    for(let arr of nums){
        result ^=arr
    }
    return result
};