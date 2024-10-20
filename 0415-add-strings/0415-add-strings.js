/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let conv1=BigInt(num1)
    let conv2=BigInt(num2)
    let sum=(conv1+conv2).toString()
    return sum

    
};