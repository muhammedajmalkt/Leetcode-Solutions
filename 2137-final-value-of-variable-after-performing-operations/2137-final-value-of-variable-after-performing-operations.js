/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let s=0
for(let i =0 ;i< operations.length ; i++){
     let a = operations[i]
    if(a.includes("++")){
        s++
    }else{
        s--
    }
}
console.log(s)
return s
};