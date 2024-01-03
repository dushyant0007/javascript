'use strict'

//The object.freeze - only freezes the first level of the object
// here we can till change objects inside the objects
const spendingLimits  = Object.freeze({
    jonas:1500,
    matilda:100,
    work:{
        tom:200,
    }
})

//it will give error
// spendingLimits.roy = 1200;

//this will work
spendingLimits.work.tom += 20;
spendingLimits.work.foo = 140;
console.log(spendingLimits)

//there are third parties library to implement DEEP-FREEZE