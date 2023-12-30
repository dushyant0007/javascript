////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Working with Strings Part 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// strings are immutable because strings are primitive

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // Prints: 'A'
console.log(plane[1]); // Prints: '3'
console.log(plane[2]); // Prints: '2'
console.log('B737'[0]); // Prints: 'B'

console.log(airline.length); // Prints: 16
console.log('B737'.length); // Prints: 4

console.log(airline.indexOf('r')); // Prints: 6

// Search from the end of the string
console.log(airline.lastIndexOf('r')); // Prints: 10

// Search for the occurrence of the word
console.log(airline.indexOf('portugal')); // Prints: -1. Because it is case-sensitive and string contains 'Portugal' not 'portugal'

// Slice the string starting from index 4 to the end of the string // and return new string
console.log(airline.slice(4)); // Prints: 'Air Portugal'

// Slice the string from index 4 included, index 7 excluded
console.log(airline.slice(4, 7)); // Prints: 'Air'

// Start from the index 0, right up to the first occurrence of the ' '
console.log(airline.slice(0, airline.indexOf(' '))); // Prints: 'TAP'

// Start from the index AFTER the last index of ' ', right up to the end of the string
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Prints: 'Portugal'

// Start from the end of the string. Print the first two characters
console.log(airline.slice(-2)); // Prints: 'al'

// Start from the index 1 print up to the index before the last one
console.log(airline.slice(1, -1)); // Prints: 'AP Air Portuga'

// Strings are just primitives, so why do they have methods, should not methods
// only be available on objects such as array , well that is actually true 
// Whenever we call a method on a string , js automatically convert that string primitive
// to string object with same content and then js on that obj where the methods all called 
// and this process is called boxing.
// JS internally changes the type of string by boxing and unboxing as required
console.log(typeof 'JavaScript Strings'); // Prints: string
console.log(typeof new String('JavaScript Strings')); // Prints: object. Warning: Primitive type object wrapper used
console.log(typeof new String('JavaScript Strings').slice(1)); // prints string 
console.log(typeof String('JavaScript Strings')); // Prints: string

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Working with Strings Part 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const anotherAirline = 'TAP Air Portugal';

console.log(anotherAirline.toLowerCase());
console.log(anotherAirline.toUpperCase());

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// Note that the trim() method will also remove the \n character from the email
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); // Prints: true

// replacing
const priceGB = '288,97£';
// replace() calls can also be chained because replace() returns the resulting new string
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // Prints: 288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

// Note that the replace() method will replace ONLY the first occurrence of the string
// Here 'door' is the value to be searched, and 'gate' is the value to be replaced
console.log(announcement.replace('door', 'gate'));
// Prints: All passengers come to boarding gate 23. Boarding door 23!

// replaceAll() will replace ALL occurrences of the string
console.log(announcement.replaceAll('door', 'gate'));
// Prints: All passengers come to boarding gate 23. Boarding gate 23!

// We can also use regex to replace the string 'door'
// The string to be searched is placed between / / and g is appended to tell JS to replace everywhere
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const anotherPlane = 'Airbus A320neo';
console.log(anotherPlane.includes('A320')); // Prints: true
console.log(anotherPlane.includes('Boeing')); // Prints: false
console.log(anotherPlane.startsWith('Airb')); // Prints: true
console.log(anotherPlane.endsWith('neo')); // Prints: true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Working with Strings Part 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Split and join
console.log('a+very+nice+string'.split('+')); // Prints: ["a", "very", "nice", "string"]
console.log('Alice Doe'.split(' ')); // Prints: ["Alice", "Doe"]

// We can split and store the results directly using destructuring
const [fName, lName] = 'Alice Doe'.split(' ');

// We can join strings:
const newName = ['Ms.', fName, lName].join(' ');
console.log(newName); // Prints: Ms. Alice Doe

// Changing the joiner
const newName2 = ['Ms.', fName, lName].join('_');
console.log(newName2); // Prints: Ms._Alice_Doe

// Capitalize just the first letter of every word of a name
const capitalizeName = function (name) {
    const splitName = name.toLowerCase().split(' ');
    const capitalizedNameArr = [];
    for (const partialName of splitName) {
        // capitalizedNameArr.push(partialName[0].toUpperCase() + partialName.slice(1));
        capitalizedNameArr.push(partialName.replace(partialName[0],partialName[0].toUpperCase()));
    }
    return capitalizedNameArr.join(' ');
}
console.log(capitalizeName('jessica ann smith davis')); // Prints: Jessica Ann Smith Davis

// Padding
// Adding characters to the beginning or the end of the string until the string is of a desired length
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+')); // Prints: ++++++Go to gate 23!
console.log(message.padEnd(20, '+')); // Prints: Go to gate 23!++++++

// First pad the string on the left to 20, then pad the resultant padded string on the right till 30
console.log(message.padStart(20, '+').padEnd(30, '-')); // Prints: ++++++Go to gate 23!---------

// Repeat a string 
const message2 = 'Bad weather...';
console.log(message2.repeat(5));
// Prints: Bad weather...Bad weather...Bad weather...Bad weather...Bad weather...

 