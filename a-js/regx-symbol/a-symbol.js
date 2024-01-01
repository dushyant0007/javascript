// ! ------- Symbol -------

// primitive type in js
// symbol is a special value which is unique

// use symbol as the identifier in obj properties

const sym1 = Symbol('cat');
const sym2 = Symbol('cat');
// smy1 != sym2

// ------------------------------

const idSym = Symbol('id');
let user = {
    id : 9451, // Number
    name : 'This is the name',//String
    city : 'this is the city',
    age : 99,
    [idSym]:292929, // Symbol
    fun : ()=>{} // Function
}

//------------

//Give symbol but it wont be unique for a given disrupter
const sym3 = Symbol.for('dog')
const sym4 = Symbol.for('dog')
// sym3 === sym4

//-------------

const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const cat = 'blue';

function getTreatLevel(color){
    switch(color){
        case RED:
            return 'severe';
        case ORANGE:
            return 'high';
        case YELLOW:
            return 'elevated';
        case BLUE:
            return 'low';
        default:
            console.log("Invalid color") ;   

    }
}

// Symbol is not used both return same value
getTreatLevel(BLUE); // NOW this is valid
getTreatLevel(cat); // and this is not


// --------------------------

// Iterator is an object that is returned by the Symbol.iterator() method

const arr = [1,13,25,62,99];
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator)

const str  = 'hello';
const strIterator = str[Symbol.iterator]();
console.log(strIterator);

for(let n of arrIterator){
    console.log(n)
}

// If the iteration is incomplete, 
// the done property is set to false, 
// else it is set to true.
console.log(strIterator.next()) //{ value: 'h', done: false }
console.log(strIterator.next()) 
console.log(strIterator.next()) 
console.log(strIterator.next()) 
console.log(strIterator.next())// { value: 'o', done: false }
console.log(strIterator.next()) // { value: undefined, done: true }



//-----------------------------------------------

// generators provide a new way to work with functions and iterators.
// you can pause the execution of a generator function without executing 
// the whole function body. For that, we use the yield keyword.
// and continue executing code from a halted position


// generator function
function* generatorFunc() {

    console.log("1. code before the first yield");
    yield 100;
    
   console.log("2. code before the second yield");
    yield 200;

    console.log("3. The End");

}

// returns generator object
const generator = generatorFunc();

// When yield is encountered, the program 
// returns the value and pauses the generator function.
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());// {value: undefined, done: true }

console.log('-----------------------------------------');

// generator function
function* generatorFunc(a,b) {

    console.log(a,b);

    // returns 'hello' at first next()
    let x = yield 'hello';
    
    // returns passed argument on the second next()
    console.log(x);
    console.log('some code');

    // returns 5 on second next()
    yield 5;
    
}

const genObj = generatorFunc(1,22);

console.log(genObj.next());
console.log(genObj.next(6));
console.log(genObj.next());
