/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=nums1.concat(nums2).sort((a,b)=>a-b)
    let leng=arr.length
     
     if(arr.length %2 == 0){
        return (arr[leng/2]+arr[(leng/2)-1])/2
     }else{
        let y=arr[Math.floor(leng/2)]
        console.log(y)
        return y
     }
     
   
    
};