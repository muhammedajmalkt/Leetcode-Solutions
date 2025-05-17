/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj ={}
    for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (obj[a]) {
        obj[a]++;
    } else {
        obj[a] = 1;
    }

    if (obj[a] > nums.length / 2) {
        console.log(a); 
        return a
    }
}
};