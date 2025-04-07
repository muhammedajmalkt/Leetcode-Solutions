/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
let count=0
const map = num.toString().split("").map(Number)
for(let i =0;i<=map.length-1;i++){
    const val=map[i]
    if(num % val ===0){
        count++
    }
    
}
        return count
    
};