/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    count =0
    let min = Math.min(a,b)
for(let i =0 ;i<= min ;i++){
     if(a % i ==0 && b%i ==0 ){
         count++
     }
}
   console.log(count);
   return count
};