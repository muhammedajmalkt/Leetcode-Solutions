/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
        console.log(i);
        return i 

    }
    if (i === nums.length - 1) {
        console.log(nums.length); 
        return nums.length
    }
}
};