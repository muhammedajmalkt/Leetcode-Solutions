/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    const first =strs[0]
    const last =strs[strs.length-1]
    let result = ""
    const minlength =Math.min(first.length , last.length)
for(let i = 0; i< minlength;i++){
    if( first.charAt(i) != last.charAt(i)){
        console.log(result)
        return result
    }
     result += first.charAt(i)
}
return result
    
};