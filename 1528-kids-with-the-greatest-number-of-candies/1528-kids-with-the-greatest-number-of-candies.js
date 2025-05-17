/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr =[]
    const max=Math.max(...candies)
for(let i =0 ;i<candies.length ;i++){
    if(candies[i]+extraCandies >= max){
        arr.push(true)
    }else{
        arr.push(false)
    }
}

console.log(arr)
return arr
};