const eve = {
    name: 'Eve',
    dob: '1/1/1990',
    birthPlace: 'New York',
    job: 'Teacher',
    hobbies: ['rock climbing', 'pottery'],
    friends: ['Alice', 'Bob', 'Charlie', 'Dave', 'Felicia']
  };
  
  // Suppose we want to iterate over the friends property of eve
  // We can do it without having to use a counter and incrementing it
  // One important point is that in case of the for-of loop, the 'continue' and the 'break' keywords will work
  // We will look at some other ways of looping in an array in which they won't. So it is an imp distinction to make
  for (const friend of eve.friends) {
    console.log(`${friend}`); // Prints the list item one by one
  }
  // eve.friend.entries() return [[idx,val],[idx,val], ... ]


  // We can access the current index as well - like this:
  for (const item of eve.friends.entries()) {
    console.log(item); // [index,value]
  }
  // Prints:
  /*
  [0, "Alice"]
  [1, "Bob"]
  [2, "Charlie"]
  and so on... The point being that the index of the element is printed along with the element as an array with two elements
  */
  

  // So you can access the element along with the index using:
  // Note here how we are using the destructuring operator
  for (const [idx, elm] of eve.friends.entries()) {
    console.log(`Friend ${idx}: ${elm}`);
  }
  // Prints:
  /*
  Friend 0: Alice
  Friend 1: Bob
  Friend 2: Charlie
  and so on...
  */
 //- This will give error became for of loop only iterables
  // for (let x of eve) {
  //   console.log(x);
  // }

// *********************************************************************************************************************
// For In
// Unpredictable order: for-in iteration order is not guaranteed and can differ across browsers.
// just use for-of loop everywhere
// *********************************************************************************************************************


const person = { name: "John", age: 30 };

for (const key in person) {
  console.log(`${key}: ${person[key]}`); // Prints "name: John", "age: 30"
}

let x = [1,2,3,4,5];
for(let e in x)
  console.log(e)

