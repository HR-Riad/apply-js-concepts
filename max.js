/*const apple = 100;
const sunglass = 1700;
const mobile =22000;


 if (apple>sunglass && apple>mobile){
    console.log('Apple is max');
}
else if(sunglass>apple && sunglass>mobile){
    console.log('Sunglass is max');
}
else{
   console.log ('Mobile is max');
} */

// another system

/* const apple = 100;
const sunglass = 1700;
const mobile =22000;

var max = Math.max
(apple,sunglass,mobile);
console.log (max); */

// another way

function findMax(first,second ,third){
    if(first>second && first>third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }
    else{
        return third;
    }
}

const largest =findMax(132,222,1717);
console.log(largest);