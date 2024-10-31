/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let x=s.split(" ").filter((x)=>x!=="").reverse().join(" ")
    return x
};