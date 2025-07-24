/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
let left = [0];
let right = [];
let n = nums.length;

for (let i = 0; i < n; i++) {
  left.push(left[left.length - 1] + nums[i]);
}

right[n] = 0; 
for (let i = n - 1; i >= 0; i--) {
  right[i] = right[i + 1] + nums[i];
}

let answer = [];
for (let i = 0; i < n; i++) {
  answer.push(Math.abs(left[i] - right[i + 1]));
}


console.log("Answer:", answer); 
return answer
};