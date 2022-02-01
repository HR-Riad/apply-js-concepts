function isEven(num) {
    if(num%2==0){
        return true;
    }
    return false;
}
const myNum=2222;
const isMyNumEven=isEven(myNum);
console.log (isMyNumEven);

const herNum=1717;
const isHerNumEven=isEven(herNum);
console.log(isHerNumEven);

// odd num
function isOdd(num){
    if(num!=0){
        return true;
    }
    return false
}
const myNumforOdd=1999;
const myNumisOdd=isOdd(myNumforOdd);
console.log('My num is odd',myNumisOdd);