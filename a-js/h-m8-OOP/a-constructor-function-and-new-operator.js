'use strict'

// we can use constructor functions to build an object using a function
// a constructor function is actually a completely normal function 

// the only difference between a regular function and constructor function is that we call a 
//construction function with the new operator 

const Person = function(firstName,birthYear){

    //instance/object - properties
    this.firstName  = firstName;
    this.birthYear = birthYear;

    //Bad - practice
    // never create a method inside constructor function
    // Thats because imagine we were gonna create a hundred/thousands of person objects
    // using this constructor fun  then what would happen is that each of these objects would carry around this function here
    // if we had a  1k objects we would essentially create a thousand copies of this function - so that would be treble for 
    // the performance of our code. Instead to solve this problem we are gonna use prototypes and prototypes inheritance 
    this.calAge = function(){
        console.log(2037 - this.birthYear);
    }

}

const jones = new Person('Jonas',1991);
console.log(jones) //  Person { firstName: 'Jonas', birthYear: 1991 }

// this new operator call this Person function here, but it does a whole lot more then just that
// Behind the scenes there happens 4 steps
// 1 - a new empty object is created
// 2 -  Function is called , and in this fun call - the this keyword will be set to this newly created object
// so basically in the execution context of the person function the this keyword will point to this newObject here that was created in step one
// 3 - newly crated object is linked to a prototype 
// 4 - object created is then automatically returned from constructor function // basically the this keyword will be returned

  
console.log(jones instanceof Person) // True