/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let x=[...nums]
  return [...nums,...x]
};