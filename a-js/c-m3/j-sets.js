/*
In ES6, two new data structures were added to JS - Sets and Maps.
-/
A set is a collection of unique values - there can be no duplicate elements in a set. 
Hence, sets are often used to remove duplicate elements from an array.
-/
A set can hold mixed datatypes.
-/
In the args for the constructor of the set, we can pass in any kind of iterable. 
Since an array is an iterable, it works. Similarly, if you pass in a single string,
that would work as well. The resulting set that would be created would contain 
the unique characters that are present in the string.
*/

const foodItemsArr = ['Pizza', 'Pasta', 'Pork', 'Pasta', 'Plums'];
const foodItemsSet = new Set(foodItemsArr);
console.log(foodItemsSet); // Prints: {"Pizza", "Pasta", "Pork", "Plums"}

//return undefined because in set there is no indexes 
// in fact there is no way of getting value out of a set
// if we think about this then it make sense 
// there is no need of getting data out of a set
// thats because if all values are unique and there order does not matter then there is 
// no point of retrieving values out of sets
console.log(foodItemsSet[0])

// Just like arrays, sets are also iterables
// Remember that strings are also iterables, hence we can also create a set of characters by using a string
const charsInPizza = new Set('Pizza');
console.log(charsInPizza); // Prints: {"P", "i", "z", "a"}

// Prints the size of the array
console.log(charsInPizza.size); // Prints: 4

// Check if an element exists in a set
console.log(charsInPizza.has('P')); // Prints: true
console.log(charsInPizza.has('Q')); // Prints: false

// We can add elements to a set
foodItemsSet.add('Peas');
console.log(foodItemsSet); // Prints: {"Pizza", "Pasta", "Pork", "Plums", "Peas"}

// We can remove elements from a set
// Returns true if an element in the Set existed and has been removed,
//  or false if the element does not exist.
foodItemsSet.delete('Plums');
console.log(foodItemsSet); // Prints: {"Pizza", "Pasta", "Pork", "Peas"}

// Delete all the elements from a set
charsInPizza.clear();
console.log(charsInPizza); // Prints: {}

// Since sets are iterable, we can iterate over a set as well
for (const item of foodItemsSet) {
  console.log(item);
}
/*
  Prints:
  Pizza
  Pasta
  Pork
  Peas
*/

// Sets can be used to remove duplicate elements from an array
const groceryList = ['Pizza', 'Pasta', 'Pork', 'Pasta', 'Plums'];
// Now we want to remove the duplicate items from the groceryList
// In the args for the constructor of the set, we pass in any kind of iterable. Since an array is an iterable, it works.
const uniqueItemsInList = new Set(groceryList);
// And now we can store it back into an array.
// Since the spread operator can take in any iterable as an arg, we can simply do this
const groceryListUnique = [...uniqueItemsInList];
console.log(groceryListUnique); // Prints: ["Pizza", "Pasta", "Pork", "Plums"]

// You could just do the entire thing in one line
const uniqueItemsAgain = [...new Set(groceryList)];
console.log(uniqueItemsAgain); // Prints: ["Pizza", "Pasta", "Pork", "Plums"]


