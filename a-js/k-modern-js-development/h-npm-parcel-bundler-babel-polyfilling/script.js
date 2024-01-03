//Yes this is a default-export
import cloneDeep from 'lodash-es/cloneDeep.js'

//it is very hard to copy nested object

const state = {
    cart:[
        {product:'bread',quantity:5},
        {product:'pizza',quantity:2}
    ],
    user:{loggedIn:true}
};

//not a deep copy
const stateClone = Object.assign({},state);

const stateDeepCopy = cloneDeep(state);

// to run parcel bundler ( bundle all the modules into one file(script) )
// we use npx parcel entry-file
//npx is a app inside npm - this run locally  install tools in terminal

//the parcel going to make a dict folder which stands for distribution - this folder
// is the one which we send to our final users.

//this code here is the code which only parcel understand
// so of course it will not make inout our final bundle
// what it means that whenever we change one of the modules 
// it will then of course trigger a rebuild but that new modified build, 
//but that new modified bundle will then automatically get injected into the browser
// without triggering a whole page reload / The state is maintained on the page


if(module.hot){
    module.hot.accept();
}

// whenever we are done developing our project it is time to build the final bundle,
// so the bundle that is compressed and has dead code elimination and all of that 
// and so for that we need another Parcel command - parcel built starting-point

////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Configuring babel - to transpile our super modern code back to ES5 code and this is still
impotent right now even many years after the new ES6 standard has been introduced
and the reason for that is simply there are still many people out there who are stuck on 
like a windows XP.

Now the good news is that parcel actually automatically uses Babel to transpile our code
// and we can configure Babel a lot if we want to - for example finding exactly what
browser should be supported but as always, that's a ton of work and so we don't want 
that and instead parcel makes some very good default decisions for us and so we will
simply mainly just go with these defaults.

Now just so you get a very broad and very general overview of how babel works 
lets just take a look at the babel's website.

The babel use plugins to transpile the code - and we can manually choose which
plugins we want to add or remove from the list.
example plugin to convert arrowFun(ES6) to old version
*/

/*
New features (ex - Promises) can simply not be transpiled, it's simply not possible
only syntax is easy to covert, so easy to compile.
For these added features we can polyfill them.
// to polyfill we use core-js/stable
what polygilling does is to basically recreate defined function and to make it available in
this bundle so that the code can then use it.

we can charry pick just the features that we actually want to polyfill
and this will reduce the bundle size.
ex-
import 'core-js/stable/array/find'
import 'core-js/stable/promise'

the core-js don't polyfill the async fun - so for that we use
import 'regenerator-runtime/runtime'


*/

