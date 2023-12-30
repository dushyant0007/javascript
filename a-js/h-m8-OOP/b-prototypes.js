 //! this alway refers to current execution context

 // Prototypes 
 /*
 first each and every function in js automatically has a property called prototype and 
 that includes of course construction functions.
 Now every object that is created by a certain constructor function will get access to all the methods
 and properties that we define on the constructor prototype property 
 */

 const Person = function(firstName,birthYear){
    this.firstName  = firstName;
    this.birthYear = birthYear;
 };

 const jones = new Person('Jonas',1991);

 /*
 All the objects that are created through this constructor function here will inherit so 
 they will get access to all the methods and properties that are defined on the prototype property
 */

 //Adding properties to the prototypes of all the Person's Objects
 Person.prototype.calAge = function(){
        console.log(2037 - this.birthYear)
 }

 //Look output in browser
console.log(Person.prototype)

//this keyword is to the object calling the method
 jones.calAge();

 // prints the prototype which jones is using which is the Person.prototype
console.log(jones.__proto__) 
console.log(jones.__proto__ === Person.prototype) // True
console.log(Person.prototype.isPrototypeOf(jones))//True
console.log(Person.prototype.isPrototypeOf(Person))//False 
 /*
 This works because any object always has access to the methods and properties form the prototype
 */ 


console.log(jones.__proto__)
console.log(jones.__proto__.__proto__) // Object (Object of all objects)
console.log(jones.__proto__.__proto__.__proto__) // null

// -------------

        const arr = [6,3,8,5,9,1];
console.log(arr.__proto__ === Array.prototype) // True

////////--

const theFun = function(){console.log('ok')}

// The function itself is also an object
//therefore it also has a prototype // contain methods that we have used previously on functions [ex fun.bind()]
console.dir(theFun);