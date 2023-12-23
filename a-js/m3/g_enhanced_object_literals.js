// An object literal is when you create a new object by using the {} operator. 
// ES6 introduced 3 new ways in which we can make writing object literals easier.


// Instead of writing properties explicitly in the object, 
// we can create objects outside the object and then refer to it

let friends = {
    alice: {
      name: 'Alice Doe',
      phone: '111-111-1111'
    },
    bob: {
      name: 'Bob Doe',
      phone: '222-222-2222'
    },
    charlie: {
      name: 'Charlie Doe',
      phone: '333-333-3333'
    },
  }
  
  // 1st Addition:
  // And now we are referencing the object
  const felicia = {
    name: 'Felicia',
    dob: '1/1/1990',
    birthPlace: 'New York',
    job: 'Teacher',
    hobbies: ['rock climbing', 'pottery'],
    friendsList: friends
  };
  
  // No need for creating an additional property. Just writing 'friends' will add a new property to the object with the same name as 'friends'
  const george = {
    name: 'George',
    dob: '1/1/1990',
    birthPlace: 'New York',
    job: 'Teacher',
    hobbies: ['rock climbing', 'pottery'],
    // friends:friends, // this is just little confusing
    friends
  };
  
  
  // 2nd Addition:
  // We can now write methods in objects in a shorter way
  const hannah = {
    name: 'Hannah',
    dob: '1/1/1990',
    birthPlace: 'New York',
    job: 'Teacher',
    hobbies: ['rock climbing', 'pottery'],
    friends,
  
    // Older way of writing methods
    printFriends: function() {
      for (const friend of this.friends) {
        console.log(friend);
      }
    },
  
    // Newer, shorter way of writing methods:
    printFriendsNew() {
      for (const friend of this.friends) {
        console.log(friend);
      }
    }
  };
  
  // 3rd Addition
  // Instead of just writing the property names manually/literally, we can now even compute the property names
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const ila = {
    workingHours: {
      // Note how we are specifying the property names in []. We discussed this way back.
      [days[0]]: {
        leave: '8:00am',
        arrive: '3:00pm'
      },
      [days[1]]: {
        leave: '8:00am',
        arrive: '4:00pm'
      },
      // We can also compute the property names
      [`${'w' + 'e' + 'd'}`] : {
        leave: '8:00am',
        arrive: '5:00pm'
      },
      [`day-${3+1}`] :{
        leave: '10:00am',
        arrive: '5:00pm'
      }
    }
  }
  
  console.log(ila.workingHours.mon); // Prints: {leave: "8:00am", arrive: "3:00pm"}
  console.log(ila.workingHours.tue); // Prints: {leave: "8:00am", arrive: "4:00pm"}
  console.log(ila.workingHours.wed); // Prints: {leave: "8:00am", arrive: "5:00pm"}
  console.log(ila.workingHours['day-4']);
  