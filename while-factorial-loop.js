/*function factorial(num){
    let fact =1;
    let i =1
    while(i<=num){
        fact = fact*i;
        i++
    }
    return fact;
}
const myFactorial= factorial(4);
console.log('My fact num is:',myFactorial); */

// reverse way

/*function factorial(num){
    let fact =1;
    let i =num;
    while(i>=1){
        fact = fact*i;
        i--;
    }
    return fact;
}
const myFactorialrevway= factorial(4);
console.log('My fact num is:',myFactorialrevway);
*/


//  for loop reverse way

function factorial(num){
    let fact =1;
    for(let i=num ;i>=1;i--)
    {
     
        fact=fact*i;
    }
    return fact;
}
var firstFactChoice =7;
var getFirstFactChoice = factorial(firstFactChoice);
console.log('First fact num is:',getFirstFactChoice);

var secondFactChoice =9;
var getSecondFactChoice = factorial(secondFactChoice);
console.log('Second fact num is:',getSecondFactChoice);