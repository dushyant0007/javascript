// Consider the following code where we are creating a new
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {

    // We are creating a new object using the enhanced literal syntax
    // where we do not have to specify key value pairs like:
    // const newBooking = {
    //     flightNum: flightNum,
    //     numPassengers: numPassengers,
    //     price: price
    // }

    const newBooking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(newBooking);
    bookings.push(newBooking);
}

// Recall that we can call the createBooking() function with lesser num of args
createBooking('LH123'); // Prints: {flightNum: "LH123", numPassengers: undefined, price: undefined}

// What we would like is to use default values when no parameters are specified for the args
// We add default params by changing the function declaration
const createBookingNew = function (flightNum, numPassengers = 1, price = 199.99) {

    const newBooking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(newBooking);
    bookings.push(newBooking);
}

createBookingNew('LH123'); // Prints: {flightNum: "LH123", numPassengers: 1, price: 199.99}
// An obviously we can override these defaults
createBookingNew('LH123', 2, 400); // Prints: {flightNum: "LH123", numPassengers: 2, price: 400}

// But another thing that we can do with default parameters is use the value of the previously supplied params to calculate them
// Note how we are using the value of the numPassengers to calculate the price
const createBookingNew2 = function (flightNum, numPassengers = 1, price = 199.99 * numPassengers /* price = fun_price(numPassengers)*/) {

    const newBooking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(newBooking);
    bookings.push(newBooking);
}
// The price is being calculated using the args passed in.
createBookingNew2('LH123', 10); // Prints: {flightNum: "LH123", numPassengers: 10, price: 1999.9}

// One thing to note is that you cannot use a param in the default value calc before the param has been defined
// So you cannot do this:
const createBookingNew3 = function (flightNum, price = 199.99 * numPassengers, numPassengers = 1 ) {

    const newBooking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(newBooking);
    bookings.push(newBooking);
}

// Uncaught ReferenceError: Cannot access 'numPassengers' before initialization
createBookingNew3('LH123', 2, 5); // Error

// when we pass arg as undefined, it is same as not passing the argument / 
// this is  a way to skip a parameter - 
// the default value is automatically will be assigned to second parameter
createBookingNew2('LH123', undefined, 5);d 