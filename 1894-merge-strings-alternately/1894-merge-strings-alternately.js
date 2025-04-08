/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged= ""
    let max =Math.max(word1.length, word2.length)
    // console.log(max)
    for(let i=0;i< max;i++){
        if(word1.length > i) {
          merged+=word1[i]

        }
        if(word2.length > i) {
            merged+=word2[i]
        }
    }
    return merged
console.log(merged)
};