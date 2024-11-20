function persistence(num) {
    let string_num = String(num).split("");
    let multiplication = string_num.reduce((accumulator, currentVal)=> accumulator*currentVal, 1);
    let count = 0;
    
    if (string_num.length == 1) {
      return 0;
    }
    else if (multiplication == 0){
      return 1;
    }
    else {
      while (multiplication >= 10) {
      count = count + 1;
      string_num = String(multiplication).split("");
      multiplication = string_num.reduce((accumulator, currentVal)=> accumulator*currentVal, 1);
    }
    return count+1;
    }
  }