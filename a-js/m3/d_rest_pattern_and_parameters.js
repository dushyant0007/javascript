// Just like the Spread operator, //- the Rest pattern also have two distinct uses.

//- 1) Uses it as destructuring

// We have seen the use of the spread operator on the RHS of the = operator
const anotherArray1 = [1,2,...[3,4,5]];
// Now suppose if we wanted to save the first and second elements of the array in variables of their own,
// but for the remaining values, we wanted to group them into one single array.
// This is how we would do it.
// This is the REST syntax, because it is on the left side of the = operator
const [v1, ,v2, ...others] = anotherArray1;
//others does't include skied elements // just include rest of the element after the last variable
console.log(v1, v2, others); // Prints: 1 3 [4,5]
// rest pattern always must be the last in destructuring assignment

//// =----------------------------------

// Similarly we can also use the spread operator with objects
const charlie = {
  name: 'Charlie',
  dob: '1/1/1990',
  birthPlace: 'New York',
  job: 'Teacher',
  hobbies: ['rock climbing', 'pottery']
};
// Suppose we wanted to extract the 'hobbies' and store it into a separate variable
const { hobbies, ...otherDetailsAboutCharlie} = charlie;
console.log(hobbies); // Prints: ["rock climbing", "pottery"]
// Note that otherDetailsAboutCharlie no longer contains the hobbies
console.log(otherDetailsAboutCharlie); // Prints: {name: "Charlie", dob: "1/1/1990", birthPlace: "New York", job: "Teacher"}

//- 2) Use it with Function arguments

// The Rest operator in this case collects all of the multiple inputs and passes it in as an array.
// So, in effect, this function can accept any number of parameters
const addMultipleNumbers = function (...numbers) {
  console.log(`Args is: ${numbers} of type ${typeof numbers}`);
  let sum = 0;
  for (let i = 0; i< numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`The final sum is ${sum}`);
}

// Calling the addMultipleNumbers functions with multiple args
addMultipleNumbers(1,2);
addMultipleNumbers(1,2,3,4,);
addMultipleNumbers(1,2,3,4,5);

// Calling the addMultipleNumbers functions with arrays.
// Note how we have an array give, we are destructuring it by using the spread operator, then passing it into the fn
// where the function is then collecting it as a single array and then summing it over.
const arraysAsArgs = [1,2,3,4,5,6];
addMultipleNumbers(...arraysAsArgs);

// This does not work if you do just this.
// I think what happens is that since in the function definition you are using the ... operator
// and you are passing in an array as an args, it is expecting an array of arrays as an input?
addMultipleNumbers(arraysAsArgs);

// Another example using the Rest parameters

// Consider the following function:
const orderFood = function (mainIngredient, ...otherIngredients) {
  console.log(mainIngredient); // Prints: flour
  console.log(otherIngredients); // Prints: ["oil", "butter"]
}

let ingred1 = 'flour';
let ingred2 = 'oil';
let ingred3 = 'butter';
orderFood(ingred1, ingred2, ingred3);