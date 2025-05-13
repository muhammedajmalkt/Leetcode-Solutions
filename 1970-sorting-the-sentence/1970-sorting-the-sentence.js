/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let y= s.split(" ").sort((a,b)=>a[a.length-1] -b[b.length-1]).map((item)=>
item.slice(0,-1)).join(" ")
 return y
    
};