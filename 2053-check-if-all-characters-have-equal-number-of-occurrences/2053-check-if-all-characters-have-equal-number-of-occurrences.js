/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let y = s.split("")
let grp = new Map()
for(let i=0;i<y.length ;i++){
    let a =y[i]
    if(!grp.has(a)){
        grp.set(a,[])
    }
    grp.get(a).push(a)
}
let g= Array.from(grp.values())
let le =g[0].length
let f = g.every((item)=>item.length == le)
console.log(f)
return f
};