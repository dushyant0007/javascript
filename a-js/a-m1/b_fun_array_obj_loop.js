'use strict';
/*
Add 'use strict' at the top of the js file in order to activate strict mode. This stops JS from failing silently,
and instead generates errors in the console when certain errors occur.
*/
// *********************************************************************************************************************
// Functions
// *********************************************************************************************************************

// A function that does not return anything (return type is 'undefined')
function myLogger() {
    console.log("Hello World!");
}

// A function with a return type
function futureReminder(date, message) {
    let msg = `On ${date}, you will receive a message saying "${message}"`;
    return msg;
}

console.log(futureReminder("1/1/2021", "Happy New Year!"));

// *********************************************************************************************************************
// Function Declarations vs Expressions
// *********************************************************************************************************************

// There are 2 ways in which a function can be defined. Consider the following 2 functions for calculating age for example

// Using function declaration
function calcAge1(currYear, birthYear) {
    return currYear - birthYear;
}

// Using Function Expression
// There is another way that we can define functions. This is a function without a name - which is why it is called
// an "Anonymous Function". Here, the function itself is being stored in a variable.
const calcAge2 = function (currYear, birthYear) {
    return currYear - birthYear;
}

// Note how the 2 functions are being called. There is no difference basically.
console.log(calcAge1(2020, 1989));
console.log(calcAge2(2020, 1989));

// Note that a function declaration can be called before the function definition.
// But a function expression MUST be called only AFTER it has been defined.

// Function is being called BEFORE it is defined. Perfectly fine.
console.log(calcAge3(2020, 1989));
function calcAge3(currYear, birthYear) {
    return currYear - birthYear;
}

// Function is being called before it is defined.
// Error: Uncaught ReferenceError: Cannot access 'calcAge4' before initialization
// console.log(calcAge4(2020, 1989));
const calcAge4 = function (currYear, birthYear) {
    return currYear - birthYear;
}

// *********************************************************************************************************************
// Arrow Functions
// *********************************************************************************************************************

// An arrow function is a shorter way to write a function expression. For example, earlier we wrote:
const calcAge5 = function (currYear, birthYear) {
    return currYear - birthYear;
}

// This can be written in arrow functions as: 
// Note that the return is implicit in this case
// where there is only one expression which is not in {}
const calcAge6 = (currYear, birthYear) => currYear - birthYear;
// Function is again called as the same way:
calcAge6(2020, 1989);

// When the function body contains more than one line, the function is written as follows.
// Note the explicit return statement that was omitted previously
const calcAge7 = (currYear, birthYear) => {
    console.log("Calculating age..");
    return currYear - birthYear;
}

// Also, remember that the arrow function does not get the 'this' keyword

// *********************************************************************************************************************
// Introduction to Arrays
// *********************************************************************************************************************

// A new array can be created in the following two ways
const friends = ["Alice", "Bob", "Charlie"]; // Array Literal syntax
const years = new Array(1991, 1992, 1993, 2020); // Array Function Syntax

// We can fetch elements from the array using the following:
console.log(friends[0], friends[1], friends[2], friends[3]); // Prints: Alice Bob Charlie undefined
// Check the length of the array using:
console.log(friends.length);
// Mutate the elements of the array
friends[2] = "Claire";
friends[3] = "Dave"; // Note how we can add elements to the array
console.log(friends); // Prints: ["Alice", "Bob", "Claire", "Dave"]
friends[5] = "Eve"; // We skipped index 4 to see what would be added to the array. It's 'empty'
console.log(friends); // Prints: ["Alice", "Bob", "Claire", "Dave", empty, "Eve"]
console.log(typeof friends[4]); // and the type Prints: undefined

// Note that even though we defined the friends variable as const, we are still able to change the contents of the array
// This is because only primitive values are immutable, but array is not a primitive value.
// Hence, the contents of the friends array can change, but if you try to point the variable friends to a different array,
// then you will see an error:
// friends = []; // Attempt to assign to const or readonly variable

// An array can also hold values of different types at the same time
// Consider the following array that is supposed to store all the values related to one person
const friendsOfAlice = ["Bob", "Charlie", "Dave"];
const alice = ["Alice", "Doe", 21, friendsOfAlice]
console.log(alice); // Prints: ["Alice", "Doe", 21, Array(3)]

// *********************************************************************************************************************
// Basic Array Operations
// *********************************************************************************************************************

const friendsOfBob = ["Alice", "Charlie", "Dave"];
// Add elements to the end of the array. push returns the length of the array resulting after pushing the element.
friendsOfBob.push("Eve");

// Add elements to the beginning of the array. Like the push, unshift also returns the length of the resulting array.
friendsOfBob.unshift("Anna");

// Remove the last element of the array. Returns the removed element.
let removedElement = friendsOfBob.pop();
console.log(friendsOfBob); // Prints: ["Anna", "Alice", "Charlie", "Dave"]
console.log(removedElement); // Prints: Eve

// Remove the first element of the array
removedElement = friendsOfBob.shift();
console.log(friendsOfBob); // Prints: ["Alice", "Charlie", "Dave"]
console.log(removedElement); // Prints: Anna

// Find the index at which a particular element is at
let idx = friendsOfBob.indexOf("Dave");
console.log(idx); // Prints: 2
// If the element is not present, it prints -1
idx = friendsOfBob.indexOf("Eve");
console.log(idx); // Prints: -1

// Find if an element exists in the array.
let elementExists = friendsOfBob.includes("Dave");
console.log(elementExists); // Prints: true
elementExists = friendsOfBob.includes("Eve");
console.log(elementExists); // Prints: false
// Note that includes method uses a strict equality for this check.
let allTheYears = [2012, 2016, 2020];
console.log(allTheYears.includes(2020)); // Prints: true
console.log(allTheYears.includes("2020")); // Prints: false - because the array contains number type, and not string

// *********************************************************************************************************************
// Introduction to Objects
// *********************************************************************************************************************

// In JS, we define an object as a collection of key-value pairs
// Each of the keys are also called 'properties'. So we can say that the bob object contains 4 properties
// There are many ways to create an object - this is called Object Literal Syntax
// One of the differences between objects and arrays is that in an object, the order of the properties does not matter
// when we are trying to retrieve them
let bob = {
    firstName: "Bob",
    lastName: "Doe",
    age: 21,
    friends: ["Alice", "Charlie", "Dave"]
};
console.log(bob); // Prints: {firstName: "Bob", lastName: "Doe", age: 21, friends: Array(3)}

// You can also use this to get a more visually appealing view of the object:
console.table(bob);

// *********************************************************************************************************************
// Dot vs Bracket Notation
// *********************************************************************************************************************

// There are two ways in which you can retrieve the properties from an object
console.log(bob.firstName); // Prints: Bob
console.log(bob["firstName"]); // Prints: Bob

// The difference between the two methods is that in the second case, you can replace the string with an expression.
// Recall that an expression is something that returns a value, hence we can use that computed value as the key. Like:
// The advantage of using the [] notation to access the property of an object is that you can take an input from the
// end user, store that value in a variable, and then use that variable to fetch the corresponding value from the object
const stringName = "Name";
console.log(bob["last" + stringName]); // Prints: Doe

// The result of trying to access a property on an object that is not defined is 'undefined'
console.log(bob.job); // Prints: undefined

// You can also use the dot operator and the Bracket notations to ADD properties to an object as well
bob.job = "Painter";
bob["hobbies"] = ["Accounting", "Journalism"];
console.log(bob);

// Combining all that stuff together.
// Note that bob.friends.length works because the dot operator executes from left-to-right.
// Hence, bob.friends executes first, which results in an array, and then we call the length property on that array
// thus giving us the length.
console.log(`${bob.firstName} has ${bob.friends.length} friends, the first of which is ${bob.friends[0]}.`);
// Prints: Bob has 3 friends, the first of which is Alice.

// *********************************************************************************************************************
// Object Methods
// *********************************************************************************************************************

// So we learnt that object, just like arrays, can hold different types of data. These types of data can be primitives, arrays, or even
// other objects themselves. Now let us take it one step further.
// Recall from the Functions section where we discussed that functions are just another type of value.
// And is a function is just a value, it means that we can create a key-value pair where a function is just another value.
// And that then means that we can add functions to objects. So let's see how:

let charlie = {
    firstName: "Charlie",
    lastName: "Doe",
    birthYear: 1990,
    friends: ["Alice", "Bob", "Dave"],
    hasDriversLicense: true,

    // And now we add the function.
    // Any function that is attached to an Object is known as a 'Method'
    calcAge: function (currYear, birthYear) {
        return currYear - birthYear;
    },

    /*
    The above function is pretty similar to just writing this, which is what we were doing earlier.
    The only difference now is that instead of writing the function as a variable, we are writing it as a property.
    const calcAge = function(currYear, birthYear){
        return currYear - birthYear;
    }
    But defining a function inside the object like this will not work. It will produce a syntax error.
    Because this is a Function Declaration. What we are looking for is a Function Expression.
    function calcAge2(currYear, birthYear){
        return currYear - birthYear;
    }
    */
};

// And now we can call this function as follows. Note both the ways that we are calling the function:
console.log(charlie.calcAge(2020, charlie.birthYear));
console.log(charlie["calcAge"](2020, charlie.birthYear));

// But we do not want to access the birthYear variable through the charlie reference.
// In every method, JS gives us access to a special variable called 'this'.
// So what we can do is, read the variable directly:
let anotherCharlie = {
    firstName: "Charlie",
    lastName: "Doe",
    birthYear: 1990,
    friends: ["Alice", "Bob", "Dave"],
    hasDriversLicense: true,

    // We are reading the birthYear property directly through the 'this' reference
    calcAge: function (currYear) {
        return currYear - this.birthYear;
    },
};

console.log(anotherCharlie.calcAge(2020));

// What we can also do is store the result of the calculation of the age in a new property in the object itself
anotherCharlie = {
    firstName: "Charlie",
    lastName: "Doe",
    birthYear: 1990,
    friends: ["Alice", "Bob", "Dave"],
    hasDriversLicense: true,

    calcAge: function (currYear) {
        // We are creating a new property and storing the result of the calculation
        this.age = currYear - this.birthYear;
        return this.age;
    },
};

console.log(`Using property: ${anotherCharlie.age}`); // Prints: Using property: undefined (because the property has not been created yet)
console.log(`Using function: ${anotherCharlie.calcAge(2020)}`); // Prints: Using function: 30
console.log(`Using property: ${anotherCharlie.age}`); // Prints: Using property: 30


// *********************************************************************************************************************
// For Loop
// *********************************************************************************************************************

for (let i = 0;i < 5;i++)
    console.log(`Hello World! ${i}`);


let t = 0;
while (t < 5)
    console.log('T:' + t++)


do 
    console.log('Random no. ',Math.random()*4,
                ', T :',t++);
  while (t < 10)