/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
const duplicates = nums.filter((item, index) =>nums.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates)];

return uniqueDuplicates

};