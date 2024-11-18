/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let prv = roman[s[i]];
        let nextVal = i + 1 < s.length ? roman[s[i + 1]] : 0;

        if (prv< nextVal) {
            sum -= prv
            ;
        } else {
            sum += prv
            ;
        }
    }

    return sum;
};
