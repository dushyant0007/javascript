
// the code in this module is parsed 
// and before its executed all the code in the modules that it imports is executed first 

//--------

// import './shoppingCart.js'
console.log('Importing module')

//------

// import { addToCart } from './shoppingCart.js'
// import { addToCart,totalPrice as price, tq } from './shoppingCart.js'
// addToCart('bread',5);
// console.log(price,tq);

//-----

import * as ShoppingCart from './shoppingCart.js';;
ShoppingCart.addToCart('Banana',4);
console.log(ShoppingCart.tq)

//-----

//here we are importing the default-import and we can give it any name
import any_name from './shoppingCart.js';
any_name('pizza',1)

//-----

import the_default_export,{ addToCart,totalPrice as price, tq } from './shoppingCart.js';
the_default_export('cola',3)

//---

//proof - this is a live-connection a copy
import {cart,val} from './shoppingCart.js'
console.log('cart:',cart,'val',val)

//--

