/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let palindrome=s.split("").filter((item)=>/^[a-zA-Z0-9]$/.test(item)).join("").toLowerCase()
        let test=s.split("").filter((item)=>/^[a-zA-Z0-9]$/.test(item)).reverse().join("").toLowerCase()
        if(palindrome === test){
            return true
        }else{
            return false
        }

};