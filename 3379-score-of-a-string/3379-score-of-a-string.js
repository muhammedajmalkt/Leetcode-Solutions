/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0
for(let i = 0; i < s.length-1 ; i++){
     let dif=Math.abs( s.charCodeAt(i) - s.charCodeAt(i+1)  )
     sum+=dif
    console.log(sum)
}
    return sum
    
    
};