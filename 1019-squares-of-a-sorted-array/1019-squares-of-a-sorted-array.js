/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let x=[]
    for(i=0;i<nums.length;i++){
       x.push(Math.pow(nums[i],2))
    }
    return x.sort((a,b)=>(a-b))


};