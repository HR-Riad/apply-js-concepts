/* const products =[
    {name:'laptop', price: 80000},
    {name:'shirt', price: 800},
    {name:'keyboard', price: 8000},
    { name:'mobile', price: 40000}
];
let totalPrice = 0;
for (const product of products){
    totalPrice=totalPrice+product.price;
}
console.log(totalPrice); */

const cart =[
    {name:'laptop', price: 80000 , quantity:2},
    {name:'shirt', price: 800 , quantity:5},
    {name:'keyboard', price: 8000 , quantity:3},
    { name:'mobile', price: 40000 ,quantity:7}
];
let cartTotal =0;

for (const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log (cartTotal);