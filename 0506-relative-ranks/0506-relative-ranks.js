/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
let sorted = [...score].sort((a, b) => b - a);

let rankMap = new Map();

for (let i = 0; i < sorted.length; i++) {
  if (i === 0) rankMap.set(sorted[i], "Gold Medal");
  else if (i === 1) rankMap.set(sorted[i], "Silver Medal");
  else if (i === 2) rankMap.set(sorted[i], "Bronze Medal");
  else rankMap.set(sorted[i], (i + 1).toString());
}
let result = score.map(s => rankMap.get(s));

console.log(result);
return result
};