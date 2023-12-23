/*
We can use the for-of operator to loop through either the keys, values, or both keys and values of an object.
*/

// Previously we used the for-of loop to loop over arrays, and we said that only iterables can be looped over using the for-of loop
// But we can also use the for-of loop to loop over objects

const kristin = {
    workingHours: {
      mon: {
        leave: '8:00am',
        arrive: '3:00pm'
      },
      tue: {
        leave: '8:00am',
        arrive: '4:00pm'
      },
      wed : {
        leave: '8:00am',
        arrive: '5:00pm'
      },
      thu : {
        leave: '8:00am',
        arrive: '5:00pm'
      }
    },
  
    printWorkingHoursFor(day) {
      // console.log(`${this.workingHours}`)
      return `Leave at ${this.workingHours[day].leave} and arrive at ${this.workingHours[day].arrive}`;
    }
  };
  
  // There are three use cases - we can either loop over the keys (property names),
  // or the values in the object, or both keys and values together
  
  // 1) Loop over the keys (property names)
  for (const day of Object.keys(kristin.workingHours)) {
    console.log(day);
  }
  /*
    Prints:
    mon
    tue
    wed
    thu
   */
  
  // So what is exactly going on?
  // As you can see, Object.keys prints an array containing the keys of the object. Then we are just looping over the array
  // It only creates an array from the top level properties, does not pick up nested properties of the object passed in as an arg
  const keysInTheObject = Object.keys(kristin.workingHours);
  console.log(keysInTheObject); // Prints: ["mon", "tue", "wed", "thu"]
  
  // 2) Loop over the values
  
  const valuesInTheObject = Object.values(kristin.workingHours);
  console.log(valuesInTheObject);
  // We get an array of 4 objects
  /*
  0: {leave: "8:00am", arrive: "3:00pm"}
  1: {leave: "8:00am", arrive: "4:00pm"}
  2: {leave: "8:00am", arrive: "5:00pm"}
  3: {leave: "8:00am", arrive: "5:00pm"}
  */
  
  // Similar to the previous case, we can log the values now
  for (const {leave, arrive} of Object.values(kristin.workingHours)) {
    console.log(`Kristin leaves at ${leave} and arrives at ${arrive}`);
  }
  /*
  Prints:
  Kristin leaves at 8:00am and arrives at 3:00pm
  Kristin leaves at 8:00am and arrives at 4:00pm
  Kristin leaves at 8:00am and arrives at 5:00pm
  Kristin leaves at 8:00am and arrives at 5:00pm
  */
  
  // 3) Loop over the both property names and the values - so basically entries
  const entriesInTheObject = Object.entries(kristin.workingHours);
  console.log(entriesInTheObject);
  /*
  Note that this is an array
  [Array(2-size), Array(2), Array(2), Array(2)]
  [["mon", {…}], ["tue", {…}], ["wed", {…}], ["thu", {…}]]
  Prints:
    0: (2) ["mon", {…}]
    1: (2) ["tue", {…}]
    2: (2) ["wed", {…}]
    3: (2) ["thu", {…}]
   */
  
  // And we can loop over the entries in the object like this:
  // Note the way that we are destructuring the object. The outermost is an array notation [], and not object notation {}
  for (const [day, {leave, arrive}] of Object.entries(kristin.workingHours)) {
    console.log(`On ${day}, Kristin leaves at ${leave} and arrives at ${arrive}`);
  }
  /*
  Prints:
  On mon, Kristin leaves at 8:00am and arrives at 3:00pm
  On tue, Kristin leaves at 8:00am and arrives at 4:00pm
  On wed, Kristin leaves at 8:00am and arrives at 5:00pm
  On thu, Kristin leaves at 8:00am and arrives at 5:00pm
   */