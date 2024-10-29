/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false
    let orginal=x
    let reve=0
    while(x>0){
        let last=x % 10
        reve=reve*10+last ////
        x=Math.floor(x/10)
    }
    return orginal===reve
};