
/*
every object in js can have setters and getters properties
and we call these special properties assessor properties
while the more normal properties are called data properties
*/

const account = {
    owner : 'jones',
    movements : [200,530,120,300],

    //In this case these properties are only for this obj, not a part of any proto

    //getter
    get latest(){
        return this.movements.slice(-1).pop();
    },
    //any setter method needs to have erectly on parameter
    set latest(mov){
        this.movements.push(mov);
    }

}

//Simply write as a property
console.log(account.latest)
account.latest = 50;
console.log(account)



class PersonCl {
    
    constructor(name,birthYear_){
        // here we are creating a property for which a setter is already exists
        // so each time when are are = the property, the name will going to the arg of the setter method and setter is gonna executed
        this.fullName = name;
        this.birthYear = birthYear_;
        // if the age has only getter method
        // we cant do set the age (age = 10;) // and then we do age = 10 the age set to 10 and setter of age is called
        // fun name and property name are connected
        // if we try to access the property of and obj, and only setter is defined - 
        //then the property behave as private and print undefined
        // we don't need to create property like this - it is automatically created by getter's/setter's name
        //this.age = 10;
    }

    calAge(){
        console.log(2037 - birthYear)
    }

    // at the time of obj construction these funs crete a property with same as fun's name and take completer control of it
    // if you see in obj __proto__ there will be a age property (which is cal when we click on it)
    // and also get/set fun()
    get age(){
        console.log('setter')
        return 2037 - this.birthYear;
    }

    set age(ag){
        console.log('this is age',ag);
    }


    // Here we are creating a setter of a property name that is already exists.
    // so fullName is already a property we are trying to set here but then we also have a setter
    // so now what gonna happen is that each time this.fullName = name is executed - then actually set method
    // is gonna executed so that "= name" will then become the argument of the setter fun
    set fullName(name){
        if(name.includes(' '))
            //When are we doing this the recursion is happing
            // this statement again calling the set fullName
            //this.fullName = name;
            //to solve that error
            this._fullName = name;
        else
            console.log(`${name} is not a full name`)
    }
    get fullName(){
        return this._fullName;
    }
}

const dj = new PersonCl('D.j hi',1991);
//using getter - yes not like fun - and property is calculated
// at the time it is used
// dj.age = 10
console.log(dj.fullName = 'kuku')
console.log(dj)
console.log(dj.fullName)
console.log(dj._fullName)