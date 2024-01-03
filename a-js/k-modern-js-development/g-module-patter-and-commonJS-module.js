// Module-pattern
/// it is used to use before in order to implement module in js

const ShoppingCart2 = (function(){
    const cart = [];
    const shoppingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 99;

    const addToCart = function(product,quantity){
        cart.push([product,quantity]);
        console.log(product,quantity,'added to cart');
    }
    const orderStack = function (product,quantity){
        console.log(quantity,product,'ordered from supplier');
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

//# Closers
ShoppingCart2.addToCart('apple',4);
ShoppingCart2.addToCart('pizza',3);
ShoppingCart2.totalQuantity+=1;
console.log(ShoppingCart2.totalQuantity);

//the problem with this - is that 
/*
if we wanted one module per file like we heave in ES6 modules
then we have to create different scripts and like all of them in the HTML FILE
and that create a couple of problems like we have to careful with the order
in which we declare/import/link them in HTML.
And we would have all of the variables living in the global scope 
and finally we also couldn't bundle them together using a module bundler.

*/

//% CommonJs modules

/*
besides native ES6 Modules and the module pattern there are also other module systems 
that have been used by js in the past but again they were not native js.
So they relay on some external implementations
Two examples are AMD modules and CommonJS modules
in fact CommonJS modules are worth taking look at
 
CommonJs modules are impotent for us because they have been used in Node.js
for almost all of its existence
So only very recently ES6 modules have been actually been implemented in Node.js. 

almost all the modules in the npm repository , that we can used in our own code 
still uses the commonJs module system and the reason for that is that npm was originally
only intended for node for node which as they said uses commonJS.
only later npm become the standard repository for the whole js world.
so now we are basically stuck with commonJS 
and so therefore you will see probably a lot of commonJs sill around
 
*/

//Lets pretend we want to export something from this module


//Export
//here export keyword here is basically an object that again, is of course not defined here
// export.addToCart = function(product,quantity){
//     cart.push([product,quantity]);
//     console.log(product,quantity,'added to cart');
// };

//Import 
// const {addToCart } = require('./shoppingCart')