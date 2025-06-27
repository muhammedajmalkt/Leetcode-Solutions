/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
let words = s.split(" ");
if (pattern.length !== words.length) return false 
 else {
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let a = pattern[i];
    let b = words[i];

    if (
      (map1.has(a) && map1.get(a) !== b) ||
      (map2.has(b) && map2.get(b) !== a)
    ) {
      console.log(false);
      return false
    }

    map1.set(a, b);
    map2.set(b, a);
  }
  
  return true
}


};