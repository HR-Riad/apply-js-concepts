const question = 'Who, are you?';

function reverseString(text){
    let reverse=''; //for reverse check
    for (const letter of text){
        console.log(letter);
        reverse = letter + reverse;//for reverse check

    }
}
const reversed = reverseString(question);
console.log(reversed);