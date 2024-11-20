/*
Given a number , Return _The Maximum number _ could be formed from the digits of the number given. 
*/


function maxNumber(n){
    const asc_arr = String(n).split('').map(item => Number(item)).sort().map(item => String(item));
    return Number(asc_arr.reverse().reduce((accumulator, currentVal) => accumulator + currentVal, ''));    
  }