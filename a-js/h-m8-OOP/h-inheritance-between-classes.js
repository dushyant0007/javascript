class Person{
    
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('This is greet');
    }
}

//extends keyword automatically link the prototype
class Student extends Person{
    constructor(name,age){
        //This always needs to happen first
        // this is because - this call to the super function is responsible
        // for creating the this keyword in this subclass / without doing this - we cant use this keyword in subclass.
        super(name);//to call the parent constructor
        this.age = age;
        }
        study(){
            console.log(`${this.name} is studying.`);
        }
}

// if we don't create constructor in our sub class / the super is automatically called
// with the parameters we pass at obj creating time
const gold = new Student('gold',12);
console.log(gold)

console.log(gold.__proto__)
