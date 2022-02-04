const names =['Rahim','Karim','Rahima','Sakib','Tamim','Naim','Abdullah','Sakib','Rahim','Rahima','Sakib'];
function removeduplicate (names){
    const unique =[];

    // for of loop
    for (const element of names)
    {
        console.log(element);
        if (unique.indexOf(element)==-1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeduplicate(names);
console.log (uniqueNames);