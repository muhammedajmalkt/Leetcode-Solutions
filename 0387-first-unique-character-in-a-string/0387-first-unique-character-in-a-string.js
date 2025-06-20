/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj ={}
for(let i =0 ;i<s.length ;i++){
    a =s[i]
   if(obj[a]){
       obj[a]++
   }else{
       obj[a]=1
   }
}
for(let i =0 ;i<s.length ;i++){
    a = s[i]
if(obj[a] == 1){
   return i
 }   
}
    return -1
};