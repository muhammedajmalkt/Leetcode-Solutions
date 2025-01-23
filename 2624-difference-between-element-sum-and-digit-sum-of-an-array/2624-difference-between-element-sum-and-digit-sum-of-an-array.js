/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
     let sum = nums.reduce((acc,crv)=> acc+crv,0)
     let con = nums.join("").split("").map((item)=>Number(item)).reduce((acc,crv)=>
 acc+crv,0)
    
    return sum - con

    
};