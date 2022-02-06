/*  reverse way */
//  in for loop
/* sum = 0;
for (let i = 5; i>=1; i--)
{
    sum = sum+i;
}
console.log(sum); */

// in function
function sum(i){
    if (i==1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5));