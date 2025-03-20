/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
let n1=[]
let n2=[]
for(let i=1;i<=n;i++){
  if( i % m == 0){
      n1.push(i)
  }else{
      
  n2.push(i)
  }
}
const val =  n1.reduce((acc,val)=>acc+val,0)
const vall =  n2.reduce((acc,val)=>acc+val,0)
return vall-val
    
};