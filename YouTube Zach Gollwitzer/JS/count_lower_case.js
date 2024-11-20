/*Your task is simply to count the total number of lowercase letters in a string.*/

function lowercaseCount(str){
    const regex = /[a-z]*/g;
    const found = str.match(regex).reduce((accumulator, currentVal) => accumulator + currentVal, '');
    return found.split('').filter(c => c === c.toLowerCase()).length;
  }