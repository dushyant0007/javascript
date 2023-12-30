// JSON data can contain objects and arrays. 
// However, unlike JavaScript objects,
//JSON data cannot contain functions as values.

//? JSON syntax
// {
//     "name": "John",
//     "age": 22,
//     "gender": "male",

// }

// ?JSON array
// [ "apple", "mango", "banana"]

////? JSON array containing objects
// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]

let a = ['one','two','three',(a,b)=>{console.log(a,b)}]

console.log(a[3]) // return function definition
console.log(a[3](2,3)) // call the function

//*------JSON-to-JavaScript-Object-------------------------------------------

const jsonData = `{ "name": "John", "age": 22 }`;

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name); // John
console.log(obj.age); // John


//*------JavaScript-Object-to-JSON-------------------------------------------
const fs = require('fs')

const data = { name: "John", age : 22 };


// converting to JSON
json = JSON.stringify(data);

console.log(typeof json)//string
 
// accessing the data
console.log(json); // "{"name":"John","age":22}"

// fs.appendFileSync('a.txt','\n'+json) 

