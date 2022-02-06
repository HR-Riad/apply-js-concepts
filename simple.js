/* for (let i = 1; i<=5; i++)
{
    console.log(i);
} */



/* function consoleNumber(i){
    console.log(i);
}
consoleNumber(5); */


/* if we call funtion in bracket then it will be wrong and it will work nonstop
 */
/* function consoleNumber(i){
    console.log(i);
    consoleNumber(i);
}
consoleNumber(1);
 */

/* i+1 means 1 will add . for call perameter in inside it will work nonstop */

/* function consoleNumber(i){
    console.log(i);
    consoleNumber(i+1);
}
consoleNumber(1);
 */

/* for stop nonstop work we can give a condition */
function consoleNumber(i){
if (i>5){
    return;
}
console.log(i)
consoleNumber(i+1);
}
consoleNumber(1);