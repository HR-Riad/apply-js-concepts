function inchToFeet(inches)// we only can use inches perameter in {}.
{
    var feet = inches / 12;
    return feet;
}

// same work do in lots of places just call one function

var myInches=132;
var feet = inchToFeet(myInches);
console.log ('My inches in feet', feet);

var friendsInches = 120;
var feet = inchToFeet(friendsInches);
console.log('My friendsInches in feet',feet);

var myrelativesInches = 110;
var f= inchToFeet(myrelativesInches);
console.log('My relatives Inches in feet',f);