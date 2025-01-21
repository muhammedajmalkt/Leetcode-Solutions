/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let new1= []
    for(let i =0; i< accounts.length;i++){
    var wealth= accounts.map((item)=>item)[i].reduce((acc,crv)=>acc+crv,0)
    new1.push(wealth)
    
  }
  return Math.max(...new1)
    
};