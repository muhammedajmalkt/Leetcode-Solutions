/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let sum = 0
let obj = new Map()
for( i of nums){
    if(obj.has(i)){
        obj.set(i,obj.get(i)+1)
    }else{
        obj.set(i,1)
    }
}
let y =[...obj.values()].sort((a,b)=>b-a)
let max=Math.max(...y)

for(let i of y){
   if( i == max ){
       sum += max 
   }
}
console.log(sum)
return sum
};