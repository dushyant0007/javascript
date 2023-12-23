// Arrays are objects, and as we have seen, objects can have functions of their 
// own that are called methods. There are several methods that are defined on the array object.


// Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE: Extract part of the array WITHOUT changing the original array (i.e. returns a new array)
console.log(arr.slice(2)); // Prints: ["c", "d", "e"]
console.log(arr.slice(2, 4)); // Prints: ["c", "d"]
console.log(arr.slice(-2)); // Prints: ["d", "e"]
console.log(arr.slice(-1)); // Prints: ["e"]
console.log(arr.slice(1, -2)); // Prints: ["b", "c"]
console.log(arr.slice()); // Prints: ["a", "b", "c", "d", "e"] i.e. returns a shallow copy of the original array
console.log([...arr]); // But this method of creating a shallow copy is much easier

console.log(arr); // Prints: ["a", "b", "c", "d", "e"]. i.e. original array is not mutated in any way


// SPLICE: MUTATES THE ORIGINAL ARRAY. Functionally, it is same as slice().
console.log(arr.splice(2)); // Prints: ["c", "d", "e"]
// But now, notice what happens to our original array. The above extracted elements are basically gone from the original array
console.log(arr); // Prints: ["a", "b"]
// Hence the splice() method is normally used for deleting one or more elements from the array
// One common use case is to remove the last element from an array
console.log(arr.splice(-1)); // Prints: ["b"]
console.log(arr); // Prints: ["a"]

// Note that the second args of the splice() method is the number of elements that should be deleted
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(2, 2)); // Prints: ["c", "d"]
console.log(arr); // Prints: ["a", "b", "e"]


// REVERSE: MUTATES THE ORIGINAL ARRAY. Reverses the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // Prints: ["f", "g", "h", "i", "j"]
console.log(arr2); // Prints: ["f", "g", "h", "i", "j"]. The original array is mutated


// CONCAT: Join two arrays. Does not change either of the two inout arrays.
const letters = arr.concat(arr2);
console.log(letters); // Prints: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// But we can also concat two arrays using this:
console.log([...arr, ...arr2]);


// JOIN: join all the elements of an array using the specified separator
console.log(letters.join(' - ')); // Prints: a - b - c - d - e - f - g - h - i - j
console.log(typeof letters.join(' - ')); // Note that the type of the result after join is a string

// Just for the sake of completion - we ahve already looked at these methods earlier

// push: Add elements to the end of the array.
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.push('f')); // Prints: 6. Because it returns the size of the resulting array
console.log(arr); // Prints: ["a", "b", "c", "d", "e", "f"]

// unshift: Add elements to the beginning of the array.
arr = ['b', 'c', 'd', 'e'];
console.log(arr.unshift('a')); // Prints: 5. Because it returns the size of the resulting array
console.log(arr); // Prints: ["a", "b", "c", "d", "e", "f"]

// pop: Removes the last element of the array. Returns the removed element.
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.pop()); // Prints: 'e'
console.log(arr); // Prints: ["a", "b", "c", "d"]

// shift: Remove the first element of the array.
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.shift()); // Prints: 'a'
console.log(arr); // Prints: ["b", "c", "d", "e"]

// indexof: Find the index at which a particular element is at
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.indexOf('c')); // Prints: 2
console.log(arr.indexOf('f')); // Prints: -1

// includes: Find if the element exists in an array
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.includes('c')); // Prints: true
console.log(arr.includes('f')); // Prints: false

// *******************************************************

/*
The {find} method returns the element based on the condition that is specified in the callback function.
Note that if multiple elements of the array satisfy the given condition, then in that case the find 
method will return the first element that satisfies the condition.
*/
values = [200, -200, 340, -300, -20, 50, 400, -460];

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const firstNegValue = values.find(val => val < 0);
console.log(firstNegValue); // Prints: -200

// *******************************************************

/*
The {findIndex} method
Returns the index of the first element in the array where predicate is true, and -1 otherwise.
*/
console.log(values.findIndex(val => val === 400)); // Prints: 6
console.log(values.findIndex(val => val < 0)); // Prints: 1
console.log(values.findIndex(val => val > 500)); // Prints: -1

// *******************************************************

//{some} Determines whether the specified callback function returns true for any element of an array.
//{every} Determines whether all the members of an array satisfy the specified test.

// We can search whether an element exists or not by using 'includes'
console.log(values.includes(340)); // Prints: true

// some

// The problem with this method is that it only searches for exact matches. We use the 'some' method to search for other conditions
// Suppose we want to check if a particular array contains any positive values or not
console.log(values.some(val => val >= 0)); // Prints: true

// every

// Determines whether all the members of an array satisfy the specified test.
console.log(values.every(amt => amt >= 0)); // Prints: false
values = [200, 340, 50, 400];
console.log(values.every(amt => amt >= 0)); // Prints: true


// *******************************************************


/*
{flat} Returns a new array with all sub-array elements concatenated into it recursively up 
to the specified depth.

{flatMap} Calls a defined callback function on each element of an array. 
Then, flattens the result into a new array. This is identical to a map followed by
 flat with depth 1. The flatMap method calls the callback function one time for each 
 element in the array.

*/

// Consider the following nested structure of arrays
// Thus flat() allows us to flatten nested arrays into a single array
let arr1 = [[1, 2, 3], [4, 5], [6], 7, 8];
console.log(arr1.flat()); // Prints: [1, 2, 3, 4, 5, 6, 7, 8]

// But suppose we have an even deeper nested structure of arrays
let arr3 = [[1, [2, 3]], [4, 5], [6, [7, 8]], 9];
console.log(arr3.flat()); // Prints: [1, Array(2), 4, 5, 6, Array(2), 9]

// SO now we needed to go one level deeper
// We can pass in an args that controls how deep we can go. Hence this works now:
console.log(arr3.flat(2)); // Prints: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// The default value of the depth parameter is 1.
// Setting a value deeper than the actual nesting has no effect. It still prints the correct value
console.log(arr3.flat(3)); // Prints: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Consider the following Data
let acct1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

let acct2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

let acct3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

let acct4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accts = [acct1, acct3, acct3, acct4];

// Problem statement is -
// we want to calculate the sum of movements for all of the accounts
const totalSum = accts.map(acct => acct.movements)
    .flat()
    .reduce((sum, value) => sum + value, 0);

console.log(totalSum); // Prints: 6130

// As it turns out, using a map() and then flattening the result is a pretty common operation
// To reduce the verbosity, we have another method called flatMap that does both of these operations in a single operation
const flatMap_totalSum = accts
    .flatMap(acct => acct.movements)
    .reduce((sum, value) => sum + value, 0);

console.log(flatMap_totalSum); // Prints: 6130