/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {

    const max= Math.max(...salary)
const min= Math.min(...salary)
let  sum =0
let length = 0
for(let h=0;h <salary.length;h++){
    if(salary[h] !==max && salary[h] !== min ){
        sum+=salary[h]
        length ++
    }
    
    
}

console.log(sum/length)
return sum/length
};