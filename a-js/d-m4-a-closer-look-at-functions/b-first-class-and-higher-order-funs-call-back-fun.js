// JS has First-Class functions that enables us to write Higher-Order functions. But what does this mean?
// What does JS having 'First-Class Functions' mean?
// It just means that functions are a different 'type' of object in JS. Since objects are values, functions are values too. And since functions are values, they can be stored in variables or even object properties (keys in an object). We have already been doing this so far.
// We can also pass functions as args to other functions. We already did that with addEvenListener where we passed in the callback function as an argument .
// We can also return a function from another function.
// Finally, since functions are objects, and objects can have methods on them, there can also be function methods. bind method is an example of that.

// What is a Higher-Order Function then?
// A Higher-Order function is either a function that receives a function as an argument, or returns a new function, or both.
// addEventListener is an example of a higher-order function because it accepts another function as an arg.
// Similarly we can have functions that return other functions.

// ****************************************************************************************
// Functions accepting Callback Functions
// ****************************************************************************************

// Two functions that will passed into the higher-order fn as args
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
 

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// This is a higher-order function:
// because it is a functions accepting callback functions
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);

    // Note how we are calling the function
    const returnedVal = fn(str);
    console.log(`Transformed string: ${returnedVal}`);
    // Transformed string: JAVASCRIPT is the best!
    // Transformed string: javascriptisthebest!

    // Since functions are objects, functions can have methods of their own. Functions can even have properties
    // fn.name is one such property that returns the name of the function
    console.log(`Transformed by: ${fn.name}`);
    // Transformed by: upperFirstWord
    // Transformed by: oneWord

};

// We call the higher-order fn as follows:
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time.
const high5 = function () {
    console.log('👋');
};
// Here, the addEventListener() is just like the transformer() function we wrote above
// and the high5 function is the callback function like the oneWord/upperFirstWord function
// On it's own, the addEventListener would have no idea what do do when a 'click' event occurred.
// It is the callback function that actually executes the required functionality.
// Hence callback functions are described as a means of implementing abstractions. Where addEventListener is more of a 
// 'higher-order' (hence the name) of abstraction
// and the high5() method is more of a lower level of abstraction.
document.body.addEventListener('click', high5);


// ****************************************************************************************
// Functions Returning Functions
// ****************************************************************************************



// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

// Since 'greet' returns a function, 'greeterhey' is also a function
const greeterHey = greet('Hey');

// And hence we can call 'greeterHey' with args of its own
greeterHey('Alice'); // Prints: Hey Alice
greeterHey('Bob'); // Prints: Hey Bob

// And we can also do something like this.
// greet('Hello') returns a function in which we then pass 'Charlie'
greet('Hello')('Charlie'); // Prints: Hello Charlie

// You can even rewrite the greet() function using just the arrow notation
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greetArrowFn = greetArrow('Hey there');
greetArrowFn('Dave'); // Prints: Hey there Dave