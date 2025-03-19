/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const x= new Set(nums1)
const y= new Set(nums2)


const x1=[...x].filter(item=> !y.has(item))
const y1=[...y].filter(item=> !x.has(item))

console.log([x1,y1])
return [x1,y1]
};