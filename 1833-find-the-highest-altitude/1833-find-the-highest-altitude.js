/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
let x= 0
let y= 0
for(let i = 0 ;i<gain.length ;i++){
    x+=gain[i]
   y= Math.max(x,y)
}
console.log(y)
return y
};