function factorial(num){
    let fact =1;
    for(let i=1;i<=num;i++)
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