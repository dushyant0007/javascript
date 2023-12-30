// This is how we have been constructing arrays so far
const arr4 = [1, 2, 3, 4, 5, 6, 7];

// Note how we are using the Array() constructor to create array
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// But now note what happens when you do this:
let x = new Array(7);
// It creates an empty array of size 7 and NOT a array with a single element - 7
console.log(x); // Prints: [empty × 7]

// So the point is that when we pass in a single args to the Array() method, it creates an empty array of the specified length
// instead of creating an array of that element

// But we CAN do something useful with x
// We can use the fill() method to fill the array with elements
x.fill(5);
console.log(x); // Prints: [5, 5, 5, 5, 5, 5, 5]

// We can also specify a begin parameter in the fill() method. Now the array will be filled with 1 starting from the index 3.
x = new Array(7);
x.fill(1, 3);
console.log(x); // Prints: [empty × 3, 1, 1, 1, 1]

// We can also specify a range
x = new Array(7);
x.fill(1, 3, 5);
console.log(x); // Prints: [empty × 3, 1, 1, empty × 2]

// The starting array need not always be empty.
// Also note how we are changing the content of an array declared with const
const y = [1, 2, 3, 4, 5, 6, 7];
y.fill(5, 2, 4);
console.log(y); // Prints: [1, 2, 5, 5, 5, 6, 7]


// Array.from()


// The first args is an object that specifies the length of the array
// The second args is the callback fn that is used to create the array
const arr5 = Array.from({length: 7}, () => 5);
console.log(arr5); // [5, 5, 5, 5, 5, 5, 5]

// In the callback fn we get access to the current element and the current index
// The Array.from() method accepts 2 parameters usually:
// 1) arrayLike – An array-like object to convert to an array.
// 2) mapfn – A mapping function to call on every element of the array
const arr6 = Array.from({length: 7}, (currElmnt, idx) => idx + 1);
console.log(arr6); // Prints: [1, 2, 3, 4, 5, 6, 7]

// There are multiple things that are going on in this example
// 1) using Array.from() for creating an array from the result of querySelectorAll
// 2) document.querySelectorAll returns an 'arrayLike' structure that is first args (as shown above)
// 3) Then we are also passing in a mapping function that is oterating through each item in this arrayLike structure
//    and returning the individual numbers as an array
labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);
    
    // This also creates an array from the document.querySelectorAll(). But then we would have to map() each element separately
    // Hence we prefer the Arrays.from() method
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});