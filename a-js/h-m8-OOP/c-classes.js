// Classes in js are just syntactic sugar over prototypes
// Classes are just a special type of functions / behind the scenes class are still function

// class expression
const Person = class { }

// Class Declaration
class PersonCl {

    // let birthYear = 1; // error
    birthYear = 1;
    constructor(firstName,birthYear_){
        this.firstName = firstName;
        this.birthYear = birthYear_;
        //birthYear = birthYear_; //error - birthYear not defined
        //This birthYear is not a let/const/var - it's a property of a function
    }

    /*
    All of these methods which we write in the class/ outside of the constructor
    will be on prototype of the object
    / PersonCl.prototype = calAge(){};
    */
    calAge(){
        console.log(2037 - birthYear)
    }

}

const dj = new PersonCl('D.j',1996)
console.log(dj.__proto__)
console.log(dj.__proto__ === PersonCl.prototype) // true
console.log(dj)

PersonCl.prototype.greet = function(){
    console.log(`hi ${this.firstName}`);
}
dj.greet()

//$ 1. Classes are NOT hoisted // fun do
//$ 2. Just like fun classes are also first class citizens (we can pass them into fun and also return them)
//$ 3. Body of classes are always executed in strict mode
