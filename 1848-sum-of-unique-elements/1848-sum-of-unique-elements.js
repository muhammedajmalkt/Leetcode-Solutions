/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum=0
let dup=nums.filter((item,index)=>nums.indexOf(item)!== index)
// console.log(dup)
for(let i=0;i<nums.length ;i++){
    if(!dup.includes(nums[i])){
        sum += nums[i]
    }
}
console.log(sum)
return sum
};