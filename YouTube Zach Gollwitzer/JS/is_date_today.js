/*
Write a simple function that takes as a parameter a date object and returns a boolean value 
representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

function isToday(date) {
    const today = new Date();
    if (today.getYear() === date.getYear()){
      if (today.getMonth() === date.getMonth()) {
        if (today.getDate() === date.getDate()) {
          return true;
        }
      }
    }
    return false;
  }