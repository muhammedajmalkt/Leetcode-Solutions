/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jwl=jewels.split("")
let stn=stones.split("")
let arr=[]
for(let i=0;i<jwl.length;i++){
    for(let j=0;j<stn.length;j++){
        if(jwl[i] == stn[j]){
            arr.push(jwl[i])
        }
    
}

    
}

console.log(arr.length);
return arr.length
    
};