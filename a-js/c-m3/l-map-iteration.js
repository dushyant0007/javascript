/*
 Instead of using the set method to add elements to a map, you can just add 
 the elements all at once by passing in an array as shown in the example below. 
 This allows us to easily create maps from existing objects.

 Similarly, we can use existing maps to convert them into arrays by using the spread operator.
*/

// There are other ways of populating a new map other than using the set() method that we used previously
const maria = new Map([
    /*[key  ,  value] */
    ['name', 'Maria Doe'],
    ['friends', ['Alice', 'Bob', 'Charlie']],
    ['hobbies', ['Stamp Collecting']]
]);

console.log(maria); // Prints: {"name" => "Maria Doe", "friends" => Array(3), "hobbies" => Array(1)}

// Note that the constructor for the Map in the above example takes an array of arrays as an arg.

const kristin2 = {
    workingHours: {
        mon: {
            leave: '8:00am',
            arrive: '3:00pm'
        },
        tue: {
            leave: '8:00am',
            arrive: '4:00pm'
        },
        wed: {
            leave: '8:00am',
            arrive: '5:00pm'
        },
        thu: {
            leave: '8:00am',
            arrive: '5:00pm'
        },
        call() {
            console.log('This is call')
        }
    }
};

// Recall the Object.entries() method that we looked at back - return array of arrays
const kristinActiveHours = Object.entries(kristin2.workingHours);
console.log(kristinActiveHours);
/*
Prints:
 [ ["mon", {…}],
   ["tue", {…}],
   ["wed", {…}],
   ["thu", {…}] ,
   ['call', [Function: call] ] ]
 */

// Converting Objects to a Map
// So this gives us an efficient way of converting objects to map
const kristinHoursMap = new Map(kristinActiveHours);
console.log(kristinHoursMap);
/*
Prints:
{
  'mon' => { leave: '8:00am', arrive: '3:00pm' },
  'tue' => { leave: '8:00am', arrive: '4:00pm' },
  'wed' => { leave: '8:00am', arrive: '5:00pm' },
  'thu' => { leave: '8:00am', arrive: '5:00pm' },
  'call' => [Function: call]
}
 */

// We can iterate over the map by doing
for (const [day, { leave='N/A', arrive='N/A' }] of kristinHoursMap) {
    console.log(`On ${day}, Kristin2 leaves at ${leave} and arrives at ${arrive}`);
}

/*
Prints:
    On mon, Kristin2 leaves at 8:00am and arrives at 3:00pm
    On tue, Kristin2 leaves at 8:00am and arrives at 4:00pm
    On wed, Kristin2 leaves at 8:00am and arrives at 5:00pm
    On thu, Kristin2 leaves at 8:00am and arrives at 5:00pm
    On call, Kristin2 leaves at N/A and arrives at N/A
 */


// Converting Map back to Array
// By just using the spread operator and unpacking the map into an array -
console.log([...kristinHoursMap]);
/*
[
  [ 'mon', { leave: '8:00am', arrive: '3:00pm' } ],
  [ 'tue', { leave: '8:00am', arrive: '4:00pm' } ],
  [ 'wed', { leave: '8:00am', arrive: '5:00pm' } ],
  [ 'thu', { leave: '8:00am', arrive: '5:00pm' } ],
  ['call', [Function: call] ]
]
 */

console.log(kristinHoursMap.entries())
console.log(kristinHoursMap.keys())
console.log(kristinHoursMap.values())