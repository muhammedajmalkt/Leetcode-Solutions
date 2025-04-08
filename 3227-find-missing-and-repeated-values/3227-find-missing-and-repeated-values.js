/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr =[]
    const onn = grid.flat()
const dup= onn.filter((item,index)=> onn.indexOf(item) !== index)
const uniqueDuplicates = [...new Set(dup)];

const max= Math.max(...onn)
const min= Math.min(...onn)

for(let i=min;i<=max;i++){
    if(!onn.includes(i)){
        arr.push(i)
    }
}
if( min-1 ===0 && !arr.length ){
      arr.push(max+1)

}
if(min-1 !==0){
         arr.push(min-1)

}
console.log(uniqueDuplicates.concat(arr))
return uniqueDuplicates.concat(arr)
    
};