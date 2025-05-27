/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
   let  ev=0,odd=0
for(let i =0 ;i<num.length ;i++){
    if( i%2==0){
        ev += Number(num[i])
    }else{
        odd +=Number(num[i])
    }
}
  return   ev == odd ?  true :false
    
};