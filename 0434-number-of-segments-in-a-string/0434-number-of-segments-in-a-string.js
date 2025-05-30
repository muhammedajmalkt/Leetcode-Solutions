/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.trim() ==="") return 0
let y = s.split(" ").filter((item)=> item  !== "")
return y.length
}