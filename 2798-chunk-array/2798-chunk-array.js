/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let ar= []
    for(let i =0;i<arr.length;i+=size){
        let chunk=arr.slice(i,size+i)
        ar.push(chunk)
    }
        return ar
};
