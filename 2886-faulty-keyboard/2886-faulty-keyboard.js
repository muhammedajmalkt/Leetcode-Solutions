/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let y =""
for(let i =0 ;i<s.length ;i++){
    if( s[i] === "i"){
      y=y.split("").reverse().join("")
        // console.log(u)
    }else{
    y+=s[i]
        
    }
}
console.log(y)
return y
};