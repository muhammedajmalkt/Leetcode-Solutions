/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const res = words.map((item)=> item[0]).join("")
    return res == s
}