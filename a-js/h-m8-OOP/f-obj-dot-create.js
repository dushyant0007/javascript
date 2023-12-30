// we learnt about construction functions and Classes
// There is actually a third way of implementing prototypal inheritance/delegation
// that third way is to use a function called Object.create which works in a pretty different way
// then construction fun and classes;

/*
 with Object.create there is still the idea of prototypal inheritance however,
 there are no prototype properties involved and also no constructor fun and no new operator.

 So instead we can use Object.create to essentially manually set the prototype of an object
 to any other object that we want.
*/ 

const PersonProto = {
    callAge(){
        console.log(2037 - this.birthYear)
    },
}


//Object.create(Object that we want to be the prototype of the new object)
// this will now return a brand new obj that is linked to the prototype that we passed in here;
const steven = Object.create(PersonProto)
// steven here is right now an empty object and it will be linked to this PersonProto obj which will be
// its prototype

console.log(steven.__proto__ === PersonProto)
steven.name = 'Steven';
steven.birthYear = 2002;
steven.callAge();

//  We need obj.create to link prototypes - in order to implement inheritance between classes

//^ ///////////////////////////////////////////////////////////////////////////////////

const PersonProto_ = {
    callAge(){
        console.log(2037 - this.birthYear)
    },

    //can be of any name
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const tom = Object.create(PersonProto_)
tom.init('Tom',1979);
tom.callAge();
