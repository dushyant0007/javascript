// Suppose we have an existing array, and using that we want to create a new array
const myArray1 = [5,6,7,8];
// The new array is supposed to contain all the numbers from 1 to 8
// We can do this. Also, take note that myArray2 is a new array.(Signified by the use of [] operator to create a new array)
const myArray2 = [1,2,3,4, ...myArray1];
console.log(myArray2); // Prints: [1, 2, 3, 4, 5, 6, 7, 8]
// Note that doing:
const myArray3 = [1,2,3,4,myArray1];
// would have given us nested array. That is not what we want.
console.log(myArray2); // Prints: [1, 2, 3, 4, [5, 6, 7, 8]]

// A second use of the spread operator is to pass multiple arguments to a function.
// For example, in console.log, we can pass in the individual elements of the array
console.log(...myArray2); // Prints: 1 2 3 4 5 6 7 8

// Two use cases of the spread operator are:
// 1) Create shallow copies of arrays
// 2) Merge two or more arrays

// 1) Create shallow copies of arrays
const myArrayCopy = [...myArray2];
console.log(myArrayCopy); // Prints: [1, 2, 3, 4, 5, 6, 7, 8]

// 2) Merge two or more arrays
const myArray4 = [9, 10];
const mergedArray = [...myArray2, ...myArray4];
console.log(mergedArray); // Prints: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Note that the spread operator does not only work on arrays, instead it works on all iterables.
// Iterables are: arrays, strings, maps, sets. But NOT Objects.

// Since strings are also iterables, we can also use the spread operator with strings
const firstName = 'Alice';
const charsOfName = [...firstName];
console.log(charsOfName); // Prints: ["A", "l", "i", "c", "e"]

// We can also use the spread operator in order to pass multiple args to a function
const cookFood = function (ing1, ing2, ing3) {
  console.log(`Your meal containing ${ing1}, ${ing2}, and ${ing3} is ready`);
}

const ingredients = ['Potatoes', 'Onions', 'Bread'];
// And now, instead of passing in each of the ingredients like ingredients[0], ingredients[1], ingredients[2], we do this:
cookFood(...ingredients); // Prints: Your meal containing Potatoes, Onions, and Bread is ready

// But now, you can also use the spread operator to perform shallow copy of objects
const bob = {
  name: 'Bob',
  dob: '1/1/1990',
  birthPlace: 'New York',
  job: 'Teacher',
  hobbies: ['rock climbing', 'pottery']
};

// Adding properties to objects using the spread operator
const bobAdd = {
  favFood: 'Ramen',
  ...bob,
  favDrink: 'Kombucha'
};
console.log(bobAdd); // Prints: {favFood: "Ramen", name: "Bob", dob: "1/1/1990", birthPlace: "New York", job: "Teacher, ...}

// Shallow copy of objects
const bobClone = {...bobAdd};
console.log(bobClone); // Prints: {favFood: "Ramen", name: "Bob", dob: "1/1/1990", birthPlace: "New York", job: "Teacher, ...}