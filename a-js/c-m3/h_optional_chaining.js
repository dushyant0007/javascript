/* - 
The Optional Chaining operator "?."  is used to check if variable immediately 
preceding the operator exists or not. By 'exists' we mean the nullish concept and 
not the truthy/false concept. A value is nullish only if it is either null or undefined. 
If the variable preceding the operator is nullish, then the execution of the statement 
will immediately return with the value of undefined. Else, the execution will proceed as normal.
*/


const jake = {
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
      }
    },
  
    printWorkingHoursFor(day) {
      // console.log(`${this.workingHours}`)
      return `Leave at ${this.workingHours[day].leave} and arrive at ${this.workingHours[day].arrive}`;
    }
  };
  
  // Suppose we were trying to find the working hours of jake on friday. There is no property called 'fri' on the jake object
  console.log(jake.workingHours.fri); // Prints: undefined
  // But suppose we did not know that, and tried to access the 'leave' property on 'fri'
  // console.log(jake.workingHours.fri.leave); // Uncaught TypeError: Cannot read property 'leave' of undefined
  // So we would like to have a null check for the 'jake.workingHours.fri' property before we access any properties on it
  
  // We could do that by enclosing it in an if-block or in the && operator
  if (jake.workingHours.fri) {
    console.log(jake.workingHours.fri.leave);
  }
  // or:
  jake.workingHours.fri && console.log(jake.workingHours.fri.leave);
  
  // But in ES6, we can use the optional chaining operator.
  // Only if the property specified just before the ? exists, only then will the next property will be accessed.
  // If not, then immediately 'undefined' will be returned.
  // Here 'exists' means the 'Nullish' concept that we talked about before. So the 'leave' property will be accessed
  // only if the 'fri' property is either null or undefined. Not if it is empty, or 0, or any other such falsy values
  console.log(jake.workingHours.fri?.leave); 
  // return undefined - instead of error - can't read property 'leave' of undefined
  
  // Consider the following example
  const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  for (const day of daysOfWeek) {
    // Note how we are dynamically using the 'day' variable to specify the property name on the object.
    // If we want to use a variable name as the property name, then we have to use the [] notation.
    // and then using the optional chaining operator to access the 'leave' property on the object only if the object
    // jake.workingHours.day is not null
    console.log(`Work starts at ${jake.workingHours[day]?.leave}`);
  }
  // Prints:
  /*
  Work starts at 8:00am
  Work starts at 8:00am
  Work starts at 8:00am
  Work starts at undefined
  Work starts at undefined
  Work starts at undefined
  Work starts at undefined
   */
  
  // 2)
  // Optional Chaining also works on methods - we can check if a method actually exists before we call it
  
  // In this line we are first checking if the printWorkingHoursFor method is defined on the jake object.
  // If it is not defined, then we print 'Method does not exist' using the Null Coalescing Operator
  console.log(jake.printWorkingHoursFor?.('tue') ?? 'Method does not exist'); // Prints: 'Leave at 8:00am and arrive at 4:00pm'
  console.log(jake.printWorkingHours?.('tue') ?? 'Method does not exist'); // Prints: 'Method does not exist'
  
  
  // 3)
  // Optional Chaining also works on Arrays
  const users = [{name: 'Alice', email:'alice@e.com'}];
  // Remember that the ?. operator tests if the object immediately preceding the operator exists or not
  // And by exist we again mean the nullish concept, and not the falsy-truthy concept
  // So here, it will check if the users[0] exists
  console.log(users[0]?.name ?? 'Array is empty'); // Prints: 'Alice'
  console.log(users[1]?.name ?? 'Array is empty'); // Prints: 'Array is empty'