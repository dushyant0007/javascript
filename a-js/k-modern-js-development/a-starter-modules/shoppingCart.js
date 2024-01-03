
console.log('Exporting module')

export let val = 14;
const shippingCost = 10;
export const cart = [];

//variables declared in this module are scoped to this module
// that means all top level variables are private inside of this module


//exports should always need to happen at top level code / not inside any scope
//named export
export const addToCart = function(product,quantity){
    cart.push([product,quantity]);
    console.log(product,quantity,'added to cart')
    val++;
} 

const totalPrice = 237;
const totalQuantity = 44;

export {totalPrice,totalQuantity as tq}


//default export - 
// we use this when we want to export one thing per module
// export default value 
export default function(product,quantity){
    cart.push([product,quantity]);
    console.log(product,quantity,'added to cart');
    val++;
} 

