/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let y= s.split("")
    return [...new Set(y)].length
};