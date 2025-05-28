/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
 let arr =[]

for(let i=left ;i<= right ;i++){
    let y =i.toString().split("").every((item)=>item  !== "0" && i % Number(item) === 0  )
    y ? arr.push(i) : ""
}
console.log(arr)
return arr
};