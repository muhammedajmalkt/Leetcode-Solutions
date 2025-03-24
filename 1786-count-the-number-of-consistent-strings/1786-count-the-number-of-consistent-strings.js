/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let count = [];
  let allowedSet = new Set(allowed);
  for(let i=0;i<words.length;i++){

    if ([...words[i]].every(char => allowedSet.has(char))) {
        count.push(words[i]);
    }
}
return count.length
}
