

// Consider the following function that returns a function
const secureBooking = function () {
    let numOfPassengers = 0;
    return function () {
        numOfPassengers++;
        console.log(`${numOfPassengers} number of passengers.`);
    }
}

// Now let us call this function:
const booker = secureBooking();

// And then we call booker. And then this happens:
booker(); // Prints: 1 number of passengers.
booker(); // Prints: 2 number of passengers.
booker(); // Prints: 3 number of passengers.

// We can log the variables stored in the closure like this:
// work in browser
console.dir(booker);

// So the question is:
// how can the booker function, that is defined in the global scope, access the numOfPassengers variable defined in the child scope
// of the secureBooking function? Not only access, but also store and then change the values each time it is called.
// Also, numOfPassengers is defined as a local variable in the secureBooking function.
// The normal understanding is that once a function finishes its execution, the local variables to the function can no longer be accessed.
// But in this case we can access and change the values of the variable -
// even after the function secureBooking has returned - through the booker function


/*
! Every function always has access to the variable environment 
! Of the execution context in which the function was created
Even after that execution, context is gone

Closer - Variable environment is attached to the function exactly as it
 was at the time and please the function was created
 
even after EC is gone the VE some how keeps living somewhere in the engine


/ when the function is executed - the function attempts to increase the variable,
however this variable is not in the current scope , so js will immediately look into the 
closer and see if it can find the variable there , 
js does this even before looking up into the scope chain


A closure make sure that a function doesn't loose connection to variable that
existed at the function's birth place.

*/

// **************************
// Examples of Closure
// **************************

// Example 1: the closure of a function can be re-assigned

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };  
};

g();

// So even though the f variable has been defined outside of the g function,
// it still closes over the variable environment in the g function
f(); // Prints: 46

const h = function () {
    const b = 7;
    f = function () {
        console.log(b * 2);
    };
};

// Reassigning the f variable by calling the h() function
h();
f(); // Prints: 14
// So, in effect, the SAME f variable has been assigned to two different functions with two different variable environments


// Example 2: Showing usage of closures in a Timer.

// Note: We do not need to always return a function in order to see a closure in action.
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`n = ${n} passengers`); // Prints: n = 180 passengers. As was passed in the fn arg. And not 1000, as is defined in the parent scope
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 5);

// Showing that the variables declared in the closure take priority over the variables declared in the parent scope
const perGroup = 1000;

// Example 3: Using Closures in IFFE
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();