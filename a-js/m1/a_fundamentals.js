// 'use strict';
// This is strict mode - helps to write more secure js code

 
// Js has dynamic typing
// in js its value which has the type not variable
// variables simply store values which has type

// We can log multiple values as well
console.log("Hi", "there", 21*10); // Prints: "Hi there 210"

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


// You can also use template strings to write multi-line strings

console.log(`This is a
    multiline string 
    in JavaScript`);


// -----------------------------------

const a = 5;
// a = 9;//Error
// a = "String";//Error

console.log(y+''+a); //205
console.log(y+a);//25

// -----------------------------------

// DATA-TYPE

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
// -----------------------------------

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

//----------------------------------

let i;
console.log(i)//undefined

// -----------------------------------

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

//---------
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


// -----------

// this conversion js do automatically in comparison operations 

console.log('falsy values --- values which are not false but become false when we try to convert them bool')
//There are  5  falsy values - 0,'',undefined,null,NaN
// anything else convert to true 

console.log(Boolean(''),Boolean(undefined),Boolean(NaN));  // false
console.log(Boolean(0),Boolean(null));


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

// ---------------------------------

console.error("This is how you print error ")
console.warn(" warning time")
console.info('This is imp info')

//alert , prompt, confirm

// ---------------------------------

// loose-equal operator
console.log(18=='18') // true (it perform type conversion)

//strict-equal operator
console.log(18==='18') // false

let to = new String("one");
let too = new String("one");
console.log(to,too)

//Pointing to different to memory locations
console.log(to===too)


// -----------

