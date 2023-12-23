// The map method returns a new array. It does not mutate the original array.
// For every element in the original array, the callback function passed into the map
// method is executed on that element. The result is stored in a new array, and that array 
// is returned as the result.

// A rule of thumb is that the forEach method is used in case you want to produce side-effects.
//  Use the map method when you want to follow a functional paradigm where you return a new array 
//  and do nto mutate the state of any existing objects.

// The map Method

// Suppose the given problem is to convert an array containing values in Euros to values in Dollars
const movements = [100, 150, 200, 250, -300];
const eurToUsd = 1.1;

// This is what we would do if we were using a simple for loop
const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

// But using the map we can just do this.
// the map() calls a defined callback function on each element of an array,
// and returns a new array that contains the results.
// Just like the forEach method, the callback function in the map method also accepts the same 3 parameters
// currElement, index, entire array
// Here we are making use of only the current element
const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
});
// Note that the returned value is an array
console.log(movementsUSD); // Prints: [110.00000000000001, 165, 220.00000000000003, 275, 330]

// We can also just use the arrow function as the callback
const movementsUSDArr = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDArr); // Prints: [110.00000000000001, 165, 220.00000000000003, 275, 330]


// You can return a completely different array
const movementsDescriptions = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
            mov
        )}`
);

const movementDescriptions2 = movements.map(function (mov, idx) {
    if (mov > 0) {
        return `Movement ${idx + 1}: You deposited ${mov}`
    } else {
        return `Movement ${idx + 1}: You withdrew ${Math.abs(mov)}`
    }
})

console.log(movementDescriptions2);
// Prints:
// ["Movement 1: You deposited 100", "Movement 2: You deposited 150", "Movement 3: You deposited 200", "Movement 4: You deposited 250", "Movement 5: You withdrew 300"]


// ******************************************************************

// The filter method is used to return a new array that contains only those elements 
// from the original array that have passed a specific condition.

// Just like the map method, the filter method also accepts a callback function, and just
//  like the callback function in the map method, the callback function in the filter method 
//  also accepts three args, namely - currentElement, index, entire array.

const transactions = [200, -200, 340, -300, -20, 50, 400, -460];
const deposits = transactions.filter(amt => amt > 0);
console.log(deposits); // Prints: [200, 340, 50, 400]
// Original array is not modified in any way
console.log(transactions); // Prints: [200, -200, 340, -300, -20, 50, 400, -460]

// ******************************************************************


// The reduce method is used to compute a single value using all the values in the original array

// The callback function that is passed into the reduce method is different compared to the ones 
// passed nto map or forEach. In the callback for the reduce method, the first parameter is the 
// accumulator. This accumulator stores the value that will be finally returned from the reduce 
// function. So, for example, if we are using the reduce method to calculate the sum of all the 
// elements in an array, then the accumulator would simply return the final sum.

// The reduce method also accepts a second argument which t=is the starting value of the accumulator.

// Note that the callback function of the reduce method accepts the 'accumulator' as the first args
// The reduce function, on the other hand, accepts a second args which is the starting value of the 'accumulator'
// In this case, we are passing in the initial value as 0, as can be seen from the second args
let values = [200, -200, 340, -300, -20, 50, 400, -460];
const sum = values.reduce(function (acc, currElmnt, idx, arr) {
    console.log(`In Iteration ${idx}: acc is: ${acc}`);
    return acc + currElmnt;
}, 0);
console.log(sum); // Returns: 10
/*
In Iteration 0: acc is: 0
In Iteration 1: acc is: 200
In Iteration 2: acc is: 0
In Iteration 3: acc is: 340
In Iteration 4: acc is: 40
In Iteration 5: acc is: 20
In Iteration 6: acc is: 70
In Iteration 7: acc is: 470
 */

// Now you can see the difference when we pass in a non-zero value as the starting point of the accumulator
const sum2 = values.reduce(function (acc, currElmnt, idx, arr) {
    console.log(`In Iteration ${idx}: acc is: ${acc}`);
    return acc + currElmnt;
}, 100);
console.log(sum2); // Returns: 110
/*
Prints:
In Iteration 0: acc is: 100
In Iteration 2: acc is: 100
In Iteration 3: acc is: 440
In Iteration 4: acc is: 140
In Iteration 1: acc is: 300
In Iteration 5: acc is: 120
In Iteration 6: acc is: 170
In Iteration 7: acc is: 570
 */

// Calculate the maximum value in the array
// Can you see exactly how this code is working now?????
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// The reduce method calls the callbackfn one time for each element in the array.
// If initialValue is specified, it is used as the initial value to start the accumulation.
// The first call to the callbackfn function provides this value as an argument instead of an array value.
values = [200, -200, 340, -300, -20, 50, 400, -460];
const maxValue = values.reduce((maxVal, currElmnt) => {

    console.log(`Start of loop maxVal: ${maxVal}, currElmnt: ${currElmnt}`);
    // Remember that in each iteration we have to somehow return the acc so that it can be used in the next iteration
    if (maxVal < currElmnt) {
        return currElmnt;
    } else {
        return maxVal;
    }
}, values[0]);

console.log(`The max value is: ${maxValue}`);