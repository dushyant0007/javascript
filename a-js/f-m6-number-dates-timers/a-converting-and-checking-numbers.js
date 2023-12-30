// in javascript all numbers are represented internally as floating point numbers
// with the size of 64bits/8bytes // 53bits to store number and rest store position of decimal and sign

console.log(23 === 23.0) // true 
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.3) // 0.3
console.log(1 / 10) // 

// in some cases js do rounding behind the scenes to try its best to hide these problems
// but some operations simply can't match the fact that behind the scenes can't represent certain fractions
// Many other languages uses same system such as php/ruby

/*

Passing is the process of analyzing the string of symbols to understand the meaning of the sentence.
The term passing comes from the latin word which means part of speech in linguistics passing involves
breaking down a sentence into its component parts. This includes identifying the parts of speech 
and syntactic relations passing can be done with the help of tools like sentence. Diagrams passing
can also refer to analyzing a string of symbols in computer languages or data structures. 
For example, 5 passing involves analyzing the content of files to extract relevant data points.
This is often used by businesses to turn unstructured data into business ready formats.

*/

// The str should start form the number and only the starting number will be identified
console.log(Number.parseInt('340.4 px'))
console.log(Number.parseFloat('340.4 px'))

console.log(Number.isNaN('a121')) //false - this is a value not not a NaN
console.log(Number.isNaN(2)) //false
console.log(Number.isNaN('23')) //false
console.log(Number.isNaN(+'23')) //false
console.log(Number.isNaN(+'23x')) //True

// best way of chalking if a value is a number
console.log(Number.isFinite('44')) //false
console.log(Number.isFinite(44)) //True

console.log(Number.isInteger(44)) // true
console.log(Number.isInteger(46.0)) // true
console.log(Number.isInteger(46.3)) // false


console.log(Math.max(2,18,'23',11,2))//23
console.log(Math.max(2,18,'23a',11,2))// NaN
console.log(Math.min(5,18,23,11,3))

// just remove the decimal part
console.log(Math.trunc())

// return closest integer
console.log(Math.round())

console.log(Math.ceil())
console.log(Math.floor())

//Rounding decimals - 
console.log((2.346).toFixed(2)) // 2.35 - string
console.log((2.343).toFixed(2)) // 2.34 - string

// ------Square-Root-------

console.log(Math.sqrt(25));
console.log(25**1/2);

//---Numeric-Separators---

// its lite difficult to read numbers this way 
// const solarSystemDiameter = 286460000000;

//to make number easer to read
const solarSystemDiameter = 284_600_000_000;
console.log(solarSystemDiameter) // 286460000000

// BigInt - introduced in es 2020 
// can store number as long as we want

// adding n to specify it is a bigInt
let x = 234293479345793475923749359345028340n;
let y = 23494530546839485028346n;
console.log(x*y)

// bigInt can only perform operations with another bigint
console.log(y*BigInt(2));

console.log(20n > 15); // works
console.log(20n === 20) // don't work - different types
console.log(20n == 20) // works
console.log(20n == '20') // works

