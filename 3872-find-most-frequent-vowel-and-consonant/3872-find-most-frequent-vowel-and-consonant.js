/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let obj1 = {} , obj2 = {} ,vw = "aioue"
for (let x of s) {
    if (vw.includes(x)) {
        if (obj1[x]) {
            obj1[x]++;
        } else {
            obj1[x] = 1;
        }
    } else {
        if (obj2[x]) {
            obj2[x]++;
        } else {
            obj2[x] = 1;
        }
    }
} 
let max1=0,max2=0
for(let y in obj1){
    if( obj1[y] > max1) max1=obj1[y]
}
for(let u in obj2){
    if( obj2[u] > max2) max2=obj2[u]
}

console.log(max1,max2);
return max1+max2
};