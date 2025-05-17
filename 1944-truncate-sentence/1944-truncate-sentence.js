/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let u = s.split(" ").slice(0,k).join(" ")
    console.log(u)
    return u
    
};