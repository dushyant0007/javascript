

// ****************************************************************************************
// Call and Apply Method
// ****************************************************************************************


// Recall how the 'this' keyword worked in the case of simple objects

const alice = {
    name: 'Alice Doe',
    age: 21,
    birthYear: 1990,
    friends: [],
    addFriend(newFriend) {
        // The 'this' keyword will point to the object which called this method
        this.friends.push(newFriend);
        console.log(`${this.name} made a new friend named ${newFriend}`);
    },
    addFriendAndAge(newFriend, age) {
        this.friends.push(newFriend);
        console.log(`${this.name} made a new friend named ${newFriend} whose age is ${age}`);
    }
}

alice.addFriend('Bob Doe');

// Now suppose we wanted to create a new person named Bob.
// Bob would have the same property names as Alice.
// It would also have a addFriend() method.
// But we do not want to duplicate the method again for the Bob object.
const bob = {
    name: 'Bob Doe',
    age: 22,
    birthYear: 1989,
    friends: []
}

// Instead, what we do is we store the method from the alice object in an external variable and then reuse the function
const addNewFriendExt = alice.addFriend;

// Remember, if we tried to call the addNewFriendExt function here, we would have an error because this is an external function
// and like we had seen earlier, for a regular function call, the 'this' keyword is 'undefined'
addNewFriendExt('Alice'); // Uncaught TypeError: Cannot read property 'friends' of undefined

// So now the question is
// how do we tell JS explicitly which object it should refer to when using the addNewFriendExt() method?
// The requirement is: if we want to add a friend to the alice object, the 'this' keyword should refer to the 'alice' object
// and if we want to add a friend to the bob object, the 'this' keyword should refer to the 'bob' object

// There are 3 options: call, apply, bind

// 1) call

// Recall that functions are objects, and objects have methods.
// Hence we can access the 'call' method on a function
// The first argument in the call method is object that we want the 'this' keyword to point to.
// All the args after the first one are the args of the original function on which we are calling the 'call' method
addNewFriendExt.call(alice, 'Charlie Doe');
addNewFriendExt.call(bob, 'Dave Doe');

console.log(alice.friends); // Prints: ["Bob Doe", "Charlie Doe"]
console.log(bob.friends); // Prints: ["Dave Doe"]

// Note this method: addNewFriendExt.call(bob, 'Dave Doe');
// So the important point to consider is, even though we had the 'this' keyword inside the 'alice' object,
// we still managed to manually override the 'this' keyword by calling the function using the 'call' method and passing
// in our own 'this' variable

// Similar we can do this for any other object
const charlie = {
    name: 'Charlie Doe',
    age: 23,
    birthYear: 1988,
    friends: []
}
addNewFriendExt.call(charlie, 'Alice Doe'); // Prints: Charlie Doe made a new friend named Alice Doe
console.log(charlie.friends); // Prints: ["Alice Doe"]

// 2) apply

// This is similar to the call method we discussed above, except that the args to the function are provided as an array
const addFriendAndAgeExt = alice.addFriendAndAge;
addFriendAndAgeExt.call(charlie, 'Bob Doe', 21); // Prints: Charlie Doe made a new friend named Bob Doe whose age is 21
// Using apply, it would be:
addFriendAndAgeExt.apply(charlie, ['Dave Doe', 22]); // Prints: Charlie Doe made a new friend named Dave Doe whose age is 22

// But we avoid using this, as we can do just this:
const friendDetails = ['Eve Doe', 21];
addFriendAndAgeExt.call(charlie, ...friendDetails); // Prints: Charlie Doe made a new friend named Eve Doe whose age is 21


// ****************************************************************************************
// Bind Method
// ****************************************************************************************


/*

/ Just like the call and the apply method, the bind method allows us to set the this keyword 
for any function call.

/ The difference is that, unlike the call and apply methods, bind does not immediately call the 
function. Instead it returns a NEW function where the this keyword is already bound.

/ This is especially useful when we have to manually assign the this keyword in the case of 
event listeners. Recall for event listeners the callback function should be a function, 
and it should not be immediately called. call and apply immediately call the function.
 Hence we use the bind method instead.

 */



// Just like the 'call' and the 'apply' method, the 'bind' method allows us to set the 'this' keyword for any function call
// The difference is that, unlike the call and apply methods, bind does not immediately call the function.
// Instead, it returns a new function where the 'this' keyword  sets to 
// what ever value we pass into bind


const dave = {
    name: 'Dave Doe',
    age: 23,
    birthYear: 1988,
    friends: [],

    addFriendAndGender(newFriend, gender) {
        this.friends.push(newFriend);
        console.log(`${this.name} made a new friend named ${newFriend} with gender ${gender}`);
    }
};

const addAnotherFriend = dave.addFriendAndGender;

const eve = {
    name: 'Eve Doe',
    age: 23,
    birthYear: 1988,
    friends: []
}
// We are using the bind method to set 'this' keyword to eve.
// Note that this will not call the 'addAnotherFriend' function.
// Instead it will return a new function where the 'this' keyword will always be set 'eve'
const addFriendForEve = addAnotherFriend.bind(eve);

// And we can call this function like:
addFriendForEve('Felicia', 'female');
// Prints: Eve Doe made a new friend named Felicia with gender female
// We no longer have to specify the 'this' keyword separately now!
// And we can test this:
console.log(eve.friends); // Prints: ["Felicia"]

// Notice how in the 'call' method, apart from the 'this', we could pass in args for the functions.
// We can do the same for 'bind' method as well.
// Now in this case, the name of the friend is fixed as 'Alex'
const addFriendsForEveNamedAlex = addAnotherFriend.bind(eve, 'Alex');
// And we call the function as follows, passing ONLY the second args now.
addFriendsForEveNamedAlex('female'); // Prints: Eve Doe made a new friend named Alex with gender female

// This kind of technique where we pre-set a part of the args beforehand is known as 'Partial Application'.

// Using the bind technique with Event Listeners
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

// Add a new property to the lufthansa object called 'planes'. This means that the company currently has 300 planes
lufthansa.planes = 300;
// Whenever you buy a plane, your number of planes is incremented by 1
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// So the intention is that whenever a user clicks on the 'Buy Planes' button, the buyPlane method should be called and increment
// the count of planes by 1 and log it to the console.
// But now, when we click on the button, the 'this' keyword logs: <button class="buy">Buy new plane 🛩</button>
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);


// Why does the 'this' keyword log the element, and not the 'lufthansa' object.
// In L96 we read that:
// If the function is called as an event listener, then the 'this' keyword will point to the DOM Element that the handler function is attached to.
// So this is expected behavior.
// In order to get around this problem, we now have to manually assign the 'this' keyword to this function so that we get the intended behavior.
// But which way should we follow? Should we use call, apply, or bind.
// ONLY bind allows us to manually assign the 'this' keyword without immediately calling the function.
// And since this is a callback function, that is what we want to happen
// Hence we use the 'bind' method in this case
// And we replace the above even listener with the following:
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// And now we get the correct behavior
// And we see that the 'this' logs:
// {airline: "Lufthansa", iataCode: "LH", bookings: Array(0), planes: 300, book: ƒ...}
// which is what we intended