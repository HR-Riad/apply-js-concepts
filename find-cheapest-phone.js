const phones = [
    {name:'one plus', price: 50000, camera: 12},
    {name:'Huawei', price: 40000, camera: 10},
    {name:'HTC', price: 30000, camera: 8},
    {name:'Sony', price: 80000, camera: 15},
]
let cheapest =phones[0];
for ( const phone of phones){
    if(phone.price<cheapest.price){
        cheapest = phone;
    }

}
console.log(cheapest);