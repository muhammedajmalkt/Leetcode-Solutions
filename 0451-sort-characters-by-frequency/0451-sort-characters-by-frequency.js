/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj ={}
for(let i =0 ; i< s.length ;i++){
    let a=s[i]
    if(!obj[a]){
        obj[a]=a
    }else{
        obj[a]+=a
    }
}
console.log(Object.values(obj).sort((a,b)=> b.length - a.length).join(""))
    return Object.values(obj).sort((a,b)=> b.length - a.length).join("")
};