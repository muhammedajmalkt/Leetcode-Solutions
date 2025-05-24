/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum=0
    for(let x=0 ;x<nums.length ;x++){
    let a =nums[x]
    if( nums.length %  (x +1) ===0){
        sum +=a*a
    }
}
console.log(sum)
return  sum
};