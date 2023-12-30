const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
}

const Student = function(firstName,birthYear,course){
    //this.firstName = firstName;
    //this.birthYear = birthYear;
    //or
    //this would be a normal fun call that means - this inside the fun call = undefined;
    //to set the this keyword to curr to obj Calling Stu - we use .call method
    Person.call(this,firstName,birthYear);
    this.course = course;
}

//Student.prototype obj is now an object that inherits form Person.prototype
//once again obj.create will return a new empty object whose prototype is Person.prototype
Student.prototype = Object.create(Person.prototype)
/*
// we have to create this connection here before we add any more methods 
// to the prototype object of student
// that's because object.create will return an empty object /
// so at this point student.prototype is empty
*/

//Why we did't do we just do this // look at g-c.png;
//Now Student.prototype is referring to Person.prototype / both pointing to same prototype;
// That means Student.prototype's properties is also Person.prototype's properties
// Student.prototype = Person.prototype; 

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike  = new Student('Mike',2008,'Social Studies')
mike.introduce();

//g-d.png
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.proto__);

//Ideally is should point back to Student
//Here it points back to person
//the reason for this is we set the prototype property of the student using obj.create(Person)
console.log(Student.prototype.constructor)
console.log(Student.prototype.constructor.prototype === Person.prototype)
//to solve it
Student.prototype.constructor = Student;

console.dir(Student.prototype)

