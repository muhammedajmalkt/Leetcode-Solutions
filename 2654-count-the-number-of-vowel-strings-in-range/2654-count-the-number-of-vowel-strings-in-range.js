/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  let   vw="iouea",count=0
for(let i= left;i<=right ;i++){
    let a = words[i]
    if(vw.includes(a[0]) && vw.includes(a[a.length-1]) ){
        console.log(a)
        count++
    }

    

}
return count
};