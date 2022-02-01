/* const numbers=[7,10,17,22,33,44,66,88];
let sum=0;
for(let i=0; i<numbers.length; i++)
{
    const element = numbers[i];
    sum=sum+element;
    // console.log(sum);
}
console.log(sum); */

// funtion

function arrayTotal(numbers){
    let sum=0;
    for (let i=0; i<numbers.length;i++){
        const element = numbers[i];
        sum=sum+element;
        }
        return sum;
}
const total = arrayTotal([10,17,22]);
console.log(total);