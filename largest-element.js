function largestElement(numbers){
    let largest =0;
    for(let i=0; i<numbers.length; i++)
    {
    const element = numbers[i];
    if(element>largest)
    {
        largest=element
    }
    }
    return largest;
}
const ages =[10,12,17,22,40,38,53,65,15,32,26];
const oldest=largestElement(ages);
console.log(oldest);