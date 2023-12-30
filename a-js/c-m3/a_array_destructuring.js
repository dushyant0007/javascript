'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // This function is an example of returning two or more than two items from a single function
  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  }
};

// Normally you would do something like this:
const myArray = [1,2,3];
const a = myArray[0];
const b = myArray[1];
const c = myArray[2];

// But starting from ES6, you can do this in single line like:
// This means you are declaring 3 variables of type const named 'x', 'y', 'z'.
// This means you cannot later reassign x, y, or z to different values.
const [x, y, z] = myArray;
console.log(a, b, c); // Prints: 1 2 3

// Destructuring does not in any way affect the original array.
console.log(myArray); // Still Prints: [1, 2, 3]

// It is not necessary to extract the entire array into variables. Only a part of the array can be destructured.
const [first, second] = restaurant.categories;
console.log(first, second); // Prints: Italian Pizzeria

// So what if we wanted the first and the third elements instead? We just leave a space for the second element.
let [ctgry1, , ctgry3] = restaurant.categories;
console.log(ctgry1, ctgry3); // Prints: Italian Vegetarian

// Suppose you wanted to swap the values of two variables.
// For eg. in the above, you wanted to swap the 'ctgry1' and 'ctgry3' you would do something like this:
let temp = ctgry1;
ctgry1 = ctgry3;
ctgry3 = temp;
console.log(ctgry1, ctgry3); // Prints: Vegetarian Italian

// But now you can do just this:
// So what we are doing here is basically
// First we are creating a new array by using the [] operator containing the two elements ctgry1 and ctgry3
// Then we are destructuring the array and storing the two elements into the swapped variables. Make sense?
// We are not using let or const here because we are simple reassigning the values associated with the two variables.
[ctgry3, ctgry1] = [ctgry1, ctgry3];
console.log(ctgry1, ctgry3); // Prints: Italian Vegetarian

// We can have a function return an array and then destructure that array
// thus, in effect, having a function that returns multiple values
let [starterItem, mainCourseItem] = restaurant.order(1, 2);
console.log(starterItem, mainCourseItem); // Prints: Bruschetta Risotto

// We can also destructure nested arrays
const nestedArray = [1, 2, [3, 4]];
let [val1, , val3] = nestedArray;
console.log(val1, val3); // Prints: 1, [3,4]
// So if we want to s=destructure the array, we then do:
let [val0, , [nestedVal0, nestedVal1]] = nestedArray;
console.log(val0, nestedVal0, nestedVal1); // Prints: 1,3,4

// We can also set default values for the destructured array
let [p,q,r] = [2,3];
console.log(p,q,r); // Prints: 2 3 undefined
// But now we assign default values for each variable
[p=1,q=1,r=1] = [2,3];
console.log(p,q,r); // Prints: 2 3 1