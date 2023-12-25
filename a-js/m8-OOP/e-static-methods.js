 //- ///////////////////////////////////////////////////////////////////////
//^ INSIDE CONSTRUCTION FUN

// the static methods are only accessible by class/construction function 

const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;   
}

//Static Method
Person.hey = function(){
    console.log('👋')

    console.log(this) 
    //entire - constructor fun 
    //and the reason for that is because 
    // That is erectly the obj that is calling the method
}

const dj = new Person('D.j',1991)
Person.hey();
//console.log(dj.hey()) // error - dj.hey() is not a fun;


//- ///////////////////////////////////////////////////////////////////////
//^ INSIDE CLASS

class TheClass{
    static hey(){
        console.log("Hey from class")
        console.log(this)
        //This time this keyword is gonna point to entire class
    }
}

const jojo = new TheClass();
TheClass.hey();