///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Short Circuiting
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Normally we have used the && and || operators with only boolean operands
// But we can also use these operators with non-boolean values.
// This shows that the short-circuit operators can accept non-boolean values as arguments
// and at the same time also return non-boolean values.
console.log(3 || 'Alice'); // Prints: 3

// 1) The OR Operator

// In case of the || operator, it will return the first truthy value that it encounters.
// If all the values are falsy, then it will return the last value, even if the last value is false
console.log('' || 'Alice'); // Prints: Alice
console.log(true || 0); // Prints: true
console.log(undefined || null); // Prints: null
console.log(undefined || 0 || '' || null || "" || 'Hello' || 23); // Prints: Hello. Because 'Hello' is the first truthy value in this chain of operands

// A practical application of this behavior is as follows:
const dave = {
  name: 'Dave',
  dob: '1/1/1990',
  birthPlace: 'New York',
  job: 'Teacher',
  hobbies: ['rock climbing', 'pottery']
};
// Suppose we want to check if a property is present on the object, and we want to use that:
let daveFriends = dave.friends ? dave.friends : [];
console.log(daveFriends); // Prints: [] since there is no property called 'friends' defined on the dave object
// Instead we could have done just this:
// If the property 'friends' does not exist on the dave object, then we assign 'daveFriends' to be [], else the actual value is assigned
daveFriends = dave.friends || [];
console.log(daveFriends); // Prints: []
// But now if we added a property
dave.friends = ['Alice', 'Bob'];
// And tried fetching the value again
daveFriends = dave.friends || [];
console.log(daveFriends); // Prints: ["Alice", "Bob"]

// 2) The AND Operator

// In case of the && operator, it will return the first falsy value that it encounters.
// If all the values are truthy, then it will return the last value, even if the last value is truthy
console.log(0 && 'Alice'); // Prints: 0
console.log('Alice' && 'Bob'); // Prints: 'Bob'
console.log(23 && 'Alice' && true && '' && null  && 'Bob'); // Prints: ''

// A practical application of this behavior is as follows:
// Suppose we are trying to call a method on the dave object. But we are not sure of the method exists.
// We can wrap the method inside an if-block
if (dave.printFriendList) {
  dave.printFriendList();
}
// But now, with the AND operator we can do this:
// If the printFriendList property is falsy, the method is never called
dave.printFriendList && dave.printFriendList(); // Nothing is printed
// But now if we add the property
dave.printFriendList = function () {
  console.log(this.friends);
};
dave.printFriendList && dave.printFriendList(); // This prints now ["Alice", "Bob"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The Nullish Coalescing Operator
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Add a new property to the dave object with the falsy value of 0.
dave.numOfFriends = 0;

const numFriends = dave.numOfFriends || -1;
console.log(numFriends); // Prints: -1
// So even though the property 'numOfFriends' is defined, and has a value of 0, the 'numFriends' prints -1.
// This happens because 0 is a falsy value, and like we saw earlier, this will return -1.
// But we want the numFriends to be 0.

// Here we use the new Nullish Coalescing Operator
// This operator works with the concept of Nullish Values, instead of falsy values
// Nullish values are: 'null' and 'undefined'. It does nto include 0 or the empty string
const correctNumOfFriends = dave.numOfFriends ?? -1;
console.log(correctNumOfFriends); // Prints: 0

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Logical Assignment Operators
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dave.car ||= 'BMW';
console.log(dave.car); // Prints: BMW

dave.bike = '';
dave.bike ??= 'Trek';
console.log(dave.bike); // Prints: ''

dave.name &&= 'anonymous'