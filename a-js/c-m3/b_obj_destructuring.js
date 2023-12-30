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
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// The variables names should exactly match the property names that we want to retrieve from the object
// Unlike destructuring in arrays, we do not need to specify all the properties
// and the properties can also be specified out-of-order.
// Just like arrays, this now creates 3 new variables
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); // Prints the values from the restaurant object

// We can also change the variable names to be different from the property names
const {name: restaurantName, openingHours: workingHours, categories: tags} = restaurant;
console.log(restaurantName, workingHours, tags);

// Using Default Values

// We can also have default values in case the property that we are trying to read does not exist on an object
// The point we are trying to make here is that:
// If a property does not exist on an object, then we would get 'undefined' as is the case when defining a variable named 'menu'
// However, if a property is not defined, and we have assigned a default value to it, the variable will take the default value instead
// as is the case with the variable 'originalMenu'
// 'starterMenu' is a valid field on the object, and we are changing it's variable name to 'starters'. Hence the default value will not be taken.
const {menu, originalMenu = [], starterMenu: starters = []} = restaurant;
console.log(menu, originalMenu, starters); // Prints: undefined, [], ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating Variables

// Consider the following example
let amt1 = 100;
let amt2 = 200;
const myObject = {amt1: 1, amt2: 2};

// Now if we try to mutate the variables amt1 and amt2, we will get an error
// {amt1, amt2} = myObject; 
// when we start line with {} js accept a code block, 
//since we can't assign anything to code block we get the error
// Hence, instead, we have to do this:
({amt1, amt2} = myObject);
console.log(amt1, amt2); // Prints: 1 2

// Dealing with Nested Objects

// Consider the following object
const {fri} = workingHours;
console.log(fri); // Prints: {open: 11, close: 23}
// Now what is we wanted to destructure the object in one line. We will make use of nested objects.
const {fri: {open, close}} = workingHours;
console.log(open, close); // Prints: 11 23

// An application of destructuring objects is when passing in parameters to functions.
// In JS, you can have many parameters being passed into a function, which can make it prone to errors if you miss a parameter
// or change the order of teh parameters or something.
// What you can do instead is box the parameters into an object, that way you can use only the parameters that you need
// and also not mess up the code in case the order changes

// Consider this function
const printPersonDetails = function (name, dob, birthPlace, job, hobbies) {
  console.log(`Hi ${name}, as per our details you are born in ${birthPlace} and have a job as a ${job}.`);
}

// Instead you could pass in an object
const printPersonDetailsUsingObj = function (person) {
  console.log(`Hi ${person.name}, as per our details you are born in ${person.birthPlace} and have a job as a ${person.job}.`);
}

// And then you can destructure the object right in the function call itself
const printPersonDetailsUsingDestrObj = function ({name, dob, birthPlace, job, hobbies}) {
  console.log(`Hi ${name}, as per our details you are born in ${birthPlace} and have a job as a ${job}.`);
}

// We can also specify default values in case the properties are not present in the object being passed in
const printPersonDetailsUsingDestrObjAndDefaults = function ({name, dob = '1/1/2020', birthPlace, job, hobbies}) {
  console.log(`Hi ${name}, as per our details you are born in ${birthPlace} and have a job as a ${job}.`);
}
const alice = {
  name: 'Alice',
  dob: '1/1/1990',
  birthPlace: 'New York',
  job: 'Teacher',
  hobbies: ['rock climbing', 'pottery']
}

printPersonDetailsUsingObj(alice);
printPersonDetailsUsingDestrObj(alice);