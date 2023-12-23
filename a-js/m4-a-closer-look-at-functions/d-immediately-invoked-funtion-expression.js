// Sometimes in JS, we need a function that is only executed once, and never executed again. 
// We need this to implement something known as aync await.


// We transform the function statement that we have into an expression by wrapping it in braces - '()'
// And then we call the function immediately by appending the ()
// This pattern is known as the Immediately Invoked Function Expressions (IIFE)

(
    function () {
        console.log('This method will be executed only once');
    }
)(); // Prints: This method will be executed only once

// The same can be done with arrow functions as well
const v = () => console.log('Inside the arrow function');
v(); // This can be called any number of times that you want

// Remove the variable assignment, convert it into an expression, call it immediately
(
    () => console.log('Inside the arrow function that can only be called once')
)(); // Prints: Inside the arrow function that can only be called once

// Just fiddling around to see if this works. And it does!
(console.log)('Does this work'); //  Prints: Does this work

// Why was this done?
// So that we can avoid overwriting our local variables by global variables that may be defined having the same name
// For example:
(
    function () {
        console.log('This method will be executed only once');
        const privateVariable = 21;
    }
)();

// The privateVariable declared above will not be accessible over here:
console.log(privateVariable); // Uncaught ReferenceError: privateVariable is not defined
// And hence, this pattern can be used to perform encapsulation

// If your concern is just protecting scopes, then you do not need to follow the IFFE pattern.
// You can just do this:
{
    const oneName = 'Ein name';
    let twoName = 'Du name';
    var threeName = 'Three name';
}

console.log(oneName); // Uncaught ReferenceError: oneName is not defined
console.log(twoName); // Uncaught ReferenceError: twoName is not defined
console.log(threeName); // Prints: Three name