/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    count =0
for(let i =0 ;i<= a ;i++){
     if(a % i ==0 && b%i ==0 ){
         count++
     }
}
   console.log(count);
   return count
};