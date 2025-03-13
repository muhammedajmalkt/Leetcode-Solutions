/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const newdate= new Date(date)
 const year = newdate.getFullYear().toString(2)
 const mnth = (newdate.getMonth()+1).toString(2)
  const day = newdate.getDate().toString(2)
  return `${year}-${mnth}-${day}`
    
};