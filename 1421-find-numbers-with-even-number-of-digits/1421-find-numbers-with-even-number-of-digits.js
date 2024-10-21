/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i].toString().length%2==0){
            arr.push(nums[i])
        }
    }
    return  arr.length
};