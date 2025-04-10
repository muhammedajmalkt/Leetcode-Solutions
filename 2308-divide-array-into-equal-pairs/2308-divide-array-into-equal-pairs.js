/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const num=nums.sort((a,b)=>a-b)
const dup = [...new Set(num)],arrays=[]
let grp = new Map();
let bo=null

for(let i=0;i<=dup.length;i++){
    let a=dup[i]
    for(let j=0;j<num.length;j++){
        if(a===num[j]){
          if (!grp.has(a)) {
              grp.set(a, []);
  }
             grp.get(a).push(a);
}
    }
}
let result = Array.from(grp.values());
for(let h=0;h<result.length;h++){
  if ( result[h].length%2!==0){
          bo=false
   }
  if(bo ===null) {
      bo=true
  }

}
return bo  

};