function checkLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
  return true;
    }
    return false;
}
const myYear = 2100;
const isMyYear = checkLeapYear(myYear);
console.log('My year is a leap year',isMyYear);