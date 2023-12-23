let friends = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

// We saw earlier how to loop over an iterable using a for-of loop
for (const friend of friends) {
    console.log(`Friend's name: ${friend}`);
}
// And we could access the index in a for-of loop using:
for (const [i, friend] of friends.entries()) {
    if (friend === 'Alice') continue;
    console.log(`${i}: Friend's name: ${friend}`);
}

// Instead, we can use a forEach loop, that uses a callback function.
// forEach, in this case, is an example of a higher-order function because it accepts another function as an arg
// The callback fn in the forEach method accepts 3 parameters:
// 1) the element of the array itself
// 2) the index of the element
// 3) the entire original array
// Just like in previous method, we can pass in only part of the parameters that are required, and that would work as well
friends.forEach(function (friend, index, arr) {
    // if (friend === 'Alice') break; Cannot use 'break' or 'continue' within a forEach loop
    console.log(`${index} - Friend's name in forEach: ${friend}`);
})

/*
0 - Friend's name in forEach: Alice
1 - Friend's name in forEach: Bob
2 - Friend's name in forEach: Charlie
3 - Friend's name in forEach: Dave
4 - Friend's name in forEach: Eve
*/

// ******************************************************************************

// forEach With Maps and Sets

// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, currencyMap){
    console.log(`Symbol: ${key}, stands for ${value}`);
});

/*
Prints:
Symbol: USD, stands for United States dollar
Symbol: EUR, stands for Euro
Symbol: GBP, stands for Pound sterling
 */

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// Since there are no keys in a set, the 'value' args is passed in as the 'key' arg as well
currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});
/*
Prints:
USD: USD
GBP: GBP
EUR: EUR
 */

// In JS we have a convention, we can use '_' to denote a throwaway variable. Hence the above can be rewritten as:
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}`);
});