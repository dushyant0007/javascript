/*
 Just like an object, the data in a map is stored as key-value pairs. 
 The difference between the two is that in the case of maps,
  the keys can have any type, whereas in the case of objects, 
  the keys have to be strings. 
  So maps can have an object, an array, or even another map as a key.
 Note that the insertion order is maintained in maps in JS
*/



// Create a new map
const laura = new Map();

// To add elements to a map, we use the set(key,value) method
laura.set('name', 'Laura Doe');
// We can use different datatypes for keys and values
laura.set(1, 'Alice');
laura.set(2, 'Bob');

// Calling the set() method returns the updated map. Hence we can chain the set() operations
laura.set('hobbies', ['rock climbing', 'pottery']).set(3, 'Charlie');

// We can also use boolean values as the key
laura.set(true, 'Laura is available');
laura.set(false, 'Laura is Busy');

// If we log the map now, we see the details
console.log(laura);

/*
Prints in browser:
    Map(7){"name" => "Laura Doe", 1 => "Alice", 2 => "Bob", "hobbies" => Array(2), "3" => "Charlie",…}
    [[Entries]]
    0: {"name" => "Laura Doe"}
    1: {1 => "Alice"}
    2: {2 => "Bob"}
    3: {"hobbies" => Array(2)}
    4: {3 => "Charlie"}
    5: {true => "Laura is available"}
    6: {false => "Laura is Busy"}
 */


// To retrieve elements from the map, we use the get() method
console.log(laura.get('name')); // Prints: 'Laura Doe'
console.log(laura.get(true)); // Prints: 'Laura is available'
// Note that the datatype of the key matters
// For eg. this will print 'undefined' because there is no key with string 'true'
console.log(laura.get('true')); // Prints: 'undefined'

// We can also check whether a map has a certain key
console.log(laura.has('hobbies')); // Prints: true
console.log(laura.has('friends')); // Prints: false

// We can also delete elements from the map by passing in the respective key as the argument
laura.delete(3);
console.log(laura);
/*
    Prints in browser:
    0: {"name" => "Laura Doe"}
    1: {1 => "Alice"}
    2: {2 => "Bob"}
    3: {"hobbies" => Array(2)}
    4: {true => "Laura is available"}
    5: {false => "Laura is Busy"}
 */

// We cal also use objects/arrays as map keys
// dom elements are also objs, and those also can be used as key

// First let us look at the wrong way of doing it:
// We are adding a new element
laura.set([0, 1], 'An Array');
// And now we try to get the same element
console.log(laura.get([0, 1])); // Prints: 'undefined'
// Why? Because recall that objects are stored by their reference.
// SO you need to store the reference once you have created an array.

// So the correct way of doing it is:
const arrayKey = [1,2];
laura.set(arrayKey, 'Another Array');
console.log(laura.get(arrayKey)); // Prints: 'Another Array'

// Just to visually confirm that the array is in fact being stored as the key
console.log(laura);
/*
0: {"name" => "Laura Doe"}
1: {1 => "Alice"}
2: {2 => "Bob"}
3: {"hobbies" => Array(2)}
4: {true => "Laura is available"}
5: {false => "Laura is Busy"}
6: {Array(2) => "An Array"}
    key: (2) [0, 1]
    value: "An Array"
7: {Array(2) => "Another Array"}
    key: (2) [1, 2]
    value: "Another Array"
 */


// You can get the size of a map by doing
console.log(laura.size); // Prints: 6

// We can remove all the elements from the map
laura.clear();
console.log(laura); // Prints: Map(0) {}