class Account {

    /*
        Lets now implement truly private classes properties(fields) and methods.
        Private class fields and methods are actually part a bigger proposal for
        improving and changing Js classes which simply called ClassFields.
        The class field proposal is currently at stage three and so right now it's actually 
        not yet part of js.

        Js is moving away form the idea that classes are just syntactic sugar over 
        constructor functions Because with this new classes features classes 
        actually start to have abilities that we didn't previously have with constructor functions

        In this proposal, there are four different kinds of fields and methods.
        // 1. Public Fields / Methods
        // 2. Private Fields / Methods
    */

    //this kind of look like a variable but we don't have to declare it like let/const
    // because at the end its a object property
    // these are instance properties / not on prototype /
    locale = navigator.language; //public
    #movements = [] // private // Private field '#movements' must be declared in an enclosing class.

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;

        //by adding _ does not make the property truly private
        //this is just a convention
        // since this is not truly private we call this protected
        // this._movements = [];

        this.local = navigator.language;

        console.log('Thanks fo opening an account')
    }

    //public interface 
    deposit(val) {
        this.#movements.push(avl);
    }

    withdraw(val) {
        this.deposit(-val);
    }
    //Public and private methods are part of class-prototype
    #approveLoan(val) {
        return true;
    }
    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved')
        }
    }

    //static properties are part of class , not in its __proto__
    static hi(){
        console.log('hi');
    }
}


console.dir(Account)