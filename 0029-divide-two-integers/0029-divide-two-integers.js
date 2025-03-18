/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let x=dividend/divisor
    if(x==2147483648){
        return 2147483647
    }
    return Math.trunc(x)
};