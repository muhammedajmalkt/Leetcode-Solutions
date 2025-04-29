/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let op =0
     for(let i= 0;i<nums.length;i++){
     let k=nums[i]
    if( k % 3 !==0){
        if((k+1)%3===0){
            op++
        }else if((k-1)%3===0){
             op++

        }
     
        
      
    }
 }
 console.log(op)
 return op
};