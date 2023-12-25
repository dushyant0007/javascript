const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}


//---
const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);
jay.init("Jay",1985);
console.log(jay)
//---
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
}
const tom = Object.create(StudentProto);
tom.init('tom',2011,'Bio')
console.log(tom)
//--

console.log(PersonProto,'person-proto')
console.log(StudentProto,'student-proto')