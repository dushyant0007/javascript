// 'use strict';
// This is strict mode - helps to write more secure js code

 
// Js has dynamic typing
// in js its value which has the type not variable
// variables simply store values which has type

// We can log multiple values as well
console.log("Hi", "there", 21*10); // Prints: "Hi there 210"
console.error("This is how you print error ")
console.warn(" warning time")
console.info('This is imp info')
//alert , prompt, confirm


// When a variable is first declared in JS, it is 'undefined' and it's type is also 'undefined'.
// So basically 'undefined' is BOTH the value as well as the type of the value!!
let year;
console.log(typeof year); //Prints: "undefined"
console.log(year); //Prints: "undefined"

// Note the following though. 'null' is again both a type as well as a value, just like 'undefined'
// So typeof undefined returns undefined, but typeof null returns object.
// So the following makes no sense. This is normally considered as a bug in JS (?)
console.log(typeof undefined); // Prints: "undefined"
console.log(typeof null); // Prints: "object"



console.log(2**3); // 2^3

// type checking happens at run time
let x = 10;
let u = 2e5; // 3 * 10^5
let y =20;
console.log(x+y);

console.log(`The vale of x is ${x}`);

console.log(typeof(x));
//typeof is a operator

x = "king";
console.log(typeof(x))

// *********************************************************************************************************************
// let, const and var
// *********************************************************************************************************************

// There are 3 different ways of defining variables in JS - let, const, var
// We will be coming back to these later in the course

// let can be used when you want to 'mutate' a variable, i.e. assign it a value only to reassign it later
let firstName = "Jane";
firstName = "Jack";

// const is used when the value assigned to that variable cannot be reassigned - immutable
const yearOfBirth = 2020;
// yearOfBirth = 2021; // Error: Attempt to assign to const or readonly variable

// For the same reason, creating a const variable without assigning a value to it is invalid.
// const yearOfDeath; // const variable without initializer is not allowed

// We don't even need to define variables at all, we can directly write the name of the variable and be done with it.
// But this is a very bad idea, because in that case JS will create a property on the global object (?)
middleName = "Vesuvius";

// *********************************************************************************************************************
//  Operator Precedence
// *********************************************************************************************************************

// Consider the following. The '-' operator has a higher precedence than the '=' operator. Hence it is evaluated first.
// '-' is a left-to-right execution.
// On the other hand, '=' has a right-to-left execution. Hence y is assigned a value of 10, and then x is assigned the value
// of y, which in this case is 10. Had the assignment operator had left-to-right execution, x would have been first assigned
// the value of y, which would have been 'undefined', and then y would have been assigned a value of 10.
// Which is not what we would have expected.
let xt = y = 25 - 10 - 5;



// *********************************************************************************************************************
// String and Template Literals
// *********************************************************************************************************************

//multi-line strings
console.log(`This is a ${xt}
    multiline string 
    in JavaScript`);


// *********************************************************************************************************************
// Data - Types
// *********************************************************************************************************************

// String
// Number -> range -(2^53 - 1) to (253 - 1) -> stored as 64-bit floating-point values
// BigInt (appended by n) -> const value2 = 900719925124740998n;
// Boolean
// undefined -> let a;
// null -> let a = null (suggests that variable is empty); //null is not the same as NULL or Null.
// Symbol -> let value = Symbol('hello');//data type whose instances are unique and immutable

// All of above are primitive //Stored in call stack
// And all other are reference type // Stored in Heap

// Object -> let student = {}; //key-value pairs of collection of data
// Iterables -> arrays, strings,sets,map, but not sets


//! Symbols are immutable (cannot be changed) and are unique. 

const value1 = Symbol('hello');
const value2 = Symbol('hello');
// Though value1 and value2 both contain 'hello', they are different as they are of the Symbol type.
console.log(value1 === value2);//False

const vx = Symbol('hey');
console.log(vx); // Symbol(hey)
console.log("x.description is " + vx.description); // hey

let id = Symbol("id");
let person = {
    name: "Jack",
    'class':'first',
    // adding symbol as a key  
    [id]: 123 // not "id": 123
};

console.log(person); // { name: 'Jack', class: 'first', [Symbol(id)]: 123 }

// *********************************************************************************************************************
// Bitwise Operators
// *********************************************************************************************************************

// &&	Logical AND: true if both the operands are true, else returns false	x && y
// ||	Logical OR: true if either of the operands is true; returns false if both are false	x || y
// !	Logical NOT: true if the operand is false and vice-versa.


// &	Bitwise AND
// |	Bitwise OR
// ^	Bitwise XOR
// ~	Bitwise NOT
// <<	Left shift
// >>	Sign-propagating right shift
// >>>	Zero-fill right shift // make sign_bit 0

// *********************************************************************************************************************
// Nullish coalescing Operator (??)
// *********************************************************************************************************************

console.log('Nullish coalescing Operator (??)')
let no_gusts = 0;

const gusts = no_gusts || 10 /*10 is default value of gust*/
console.log(gusts); // 10 //but we want if gusts not defined then = 10

//Falsy values for ??(Nullish) - null and undefined (NOT 0 or '')
const correct_gusts =  no_gusts ?? 10;
console.log(correct_gusts);// 0


// --------------------

// Automatic type conversion
let currentYear = 1999
console.log("In 10 years, it will be " + currentYear + 10); // Prints: In 10 years, it will be 202010
console.log('23' - '10' - 3); // Prints: 10. Because in '-' operator case, JS converts the Strings to numbers
console.log('23' + '10' + 3); // Prints: 23103. Like we discussed, '+' converts numbers to string. Hence, concatenation happens
console.log('23' * '2'); // Prints: 46. '*' operator also converts Strings to Numbers
console.log('46' / '2'); // Prints: 23. '/' operator also converts Strings to Numbers
console.log('46' > '2'); // Prints: true. '>' operator also converts Strings to Numbers


// With + toString and with (- and /) to number
console.log("23" + "10" + 3) // 23103
console.log("23" - "10" + 3) // 16
console.log("23" - 3 + "10") // 2010
console.log("23" - 3 + "10x") // NaN

console.log('// --------------------')


// if boolean is used, true is 1, false is 0


result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4


// null is 0 when used with number
result = 4 + null;
console.log(result);  // 4



// ------------

//! Explicity Conversion

result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

result = Number(true);
console.log(result); // 1


result = Number(false); 
console.log(result); // 0

result = Number(null);
console.log(result);  // 0


console.log("Boolean(' ')", Boolean(' ')) // true
console.log("Type of NaN ",typeof NaN);// Number
console.log("Number(' fff ')", Number(' fff ')) // NaN
console.log("Number(' ')", Number(' ')) // 0


console.log('----------------->')

result = String(2 + 4);
console.log(result); // "6"

result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

// *********************************************************************************************************************
// Truthy and Falsy Values
// *********************************************************************************************************************

// Truthy and Falsy Values

// this conversion js do automatically in comparison operations 

console.log('falsy values --- values which are not false but become false when we try to convert them bool')
//There are  5  falsy values - 0,'',undefined,null,NaN
// anything else convert to true 

console.log(Boolean(''),Boolean(undefined),Boolean(NaN));  // false
console.log(Boolean(0),Boolean(null));



// *********************************************************************************************************************
// Equality operators
// *********************************************************************************************************************


// loose-equal operator
console.log(18=='18') // true (it perform type conversion)

//strict-equal operator
console.log(18==='18') // false

let to = new String("one");
let too = new String("one");
console.log(to,too)

//Pointing to different to memory locations
console.log(to===too)

// *********************************************************************************************************************
// switch statement
// *********************************************************************************************************************

let day = 'tuesday';

switch (day) {

    // Note that the braces are not required here.
    case "monday": {
        console.log("Mondays, amirite?");
        console.log("Where is the coffee");
        break;
    }

    case "tuesday": {

    }

    case "wednesday": {
        // This code will be executed for both tuesday and wednesday
        console.log("More coffee");
        break;
    }

    default:
        console.log("Not a valid date");

}

// *********************************************************************************************************************
// Statement and Expressions
// *********************************************************************************************************************

// A statement is something that produces a value
// 4 + 5 is an expression
// false is and expression
// A number like 1998 on it's own is an expression
// On the other hand..this if-else block is a statement. That is why it is called an if-else statement. It does not produce a value.
if (23 > 10) {
    console.log("23 is bigger");
} else {}

// The reason this is important is that Template Strings can only have expressions, not statements
// What this means is that: within the ${}, there should be something that produces a value, so an expression, and not a statement
console.log(`Today is ${day}`);

// *********************************************************************************************************************
// Ternary Operator
// *********************************************************************************************************************

// Since this is an operator and operators always produce values, we can use a variable to store that value
let age = 19;
let drink = age > 18 ? 'wine' : 'water';
console.log(drink);


// For the same reason as stated above, we can use the ternary operator inside a template literal
console.log(`I like to drink ${age > 18 ? "wine" : "water"}`);