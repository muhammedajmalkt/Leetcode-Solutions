/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    count =0
 for(let x of details){
     if(x.slice(-4,-2) > 60){
         count ++
     }
     
 }
           console.log(count);
           return count
};