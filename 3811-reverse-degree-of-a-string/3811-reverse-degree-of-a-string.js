/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum =0
    const g=s.split("")
for(let i=0;i<g.length;i++){
   var h= ("z".charCodeAt() - s.charCodeAt(i))+1
   sum+=h *(i+1)
}
console.log(sum)
return sum
    
};