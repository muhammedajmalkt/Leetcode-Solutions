/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
const j= names.map((item,index)=>(
    {item,hgt:heights[index]}
    ))
const f= j.sort((a,b)=>b.hgt-a.hgt)
const ma=j.map((item)=>item.item)

return ma
    
};