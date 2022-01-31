// variable
var time ='11:00pm';
var bookPrice = 150;
var isBlackColor = false;
// array
var partners=['Rahim','karim','Akash','Batas'];
var elementCount = partners.length;
var rahimIndex =partners.indexOf('rahim');
partners.push('rahima');
partners.pop();

// conditionals
if(batPrice>1200){
    console.log('I will buy bat');
}
else{
    console.log('Cant Buy');
}
// 
Loop
// 
var i =0;
while(i<=22){
    //do some work
    i++;
}
//
 for(var i = 0; i<=20; i++){

 }

//  function
function isMoonUp(time){
    if(time>=19 && time<=5)
    {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);

// let and constant

//value of variable could change 
let price = 27;
price = 30;
price = 44;

//value of variable will not change
const myName ='Riad';
console.log(myName);
// myName = 22; this will be error. We cant change when we use const.

