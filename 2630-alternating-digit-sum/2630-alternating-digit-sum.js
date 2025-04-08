/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let add =0
const num= n.toString().split("").map(Number)
console.log(num)
for(let i=0;i<num.length;i++){
     if(i%2===0){
         add+=num[i]
     }else{
   add-=num[i]

     }
}
console.log(add)
return add
    
};