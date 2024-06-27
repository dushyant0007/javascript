// --------------------------------
//! problems with var

//Dual declaration
var t = 10;
var t = 99;

// Scope issue
if (t === 99) {
    var b = 50;
    console.log(b, t, "foo")
}
console.log(b)

//----------------------------------
//* Global Scope
//* A variable declared at the top of a program or outside of a function is considered a global scope variable.
// ----------
//* Local Scope
//* A variable can also have a local scope, i.e it can only be accessed within a function.
// -------------
//* let is Block Scoped
//* The let keyword is block-scoped (variable can be accessed only in the immediate block).
// --------------

//! In JS var is function scoped //
// When var is created outside of the function,this create a global variable and 
// attach(add{var x = 10; -> x:10}) that global variable to the window object in the browser and where let does' 
//! and let is block scoped

//! functions are also function scope without strict mode else block scope

// --------------------------------

// Function declaration

function add(a, b) {
    return a + b;
}

// ----------------------------------------------------------

// * Function Expression
// and  expression produce  values 
let x_fun = function (parameter) { return parameter * parameter };
console.log(x_fun(4));

console.log('The type of x_fun is ',typeof x_fun);//function

let y = x_fun(3);
console.log(y);

//? In the above program, variable x_fun is used to store the function. 
//? Here the function is treated as an expression. And the function is 
//? called using the variable name.
// in js fun are values
//? The function above is called an anonymous function.

// Fun Expression vs Fun deceleration 
// we can call fun(fun deceleration) before  we declare and with fun exp we cant
 


//Arrow Function
// Arrow functions do not get this  keyword
// this in arrow = this of immediate parent
let arrow = (parameter1, parameter2) => {
    console.log(parameter1 + " " + parameter2)
}



let dog = parameter=>99+parameter;
// Note that the return is implicit in this case
// when there is only one statement without any {}

console.log(dog("bhu_bhu"))



// -------------------------------------------------------------

//refer howJsWork part c - g.png
//! Only var allow hosting and function declarations
//* Hoisting in JavaScript is a behavior in which a function or a variable 
//* can be used before declaration. 
//! Only var allow hosting and function declarations

a = 10;
console.log(a)
console.log(typeof (a))
var a;
var a;

//?-----------------

a = 5;
console.log(a);
// let a; // error

//?----------------

// In javascript First memory execution happens then code execution
// in memory execution all var , function etc kept in count 
// and when code execution start the values are assigned
// Before code execution all variable holds value undefined
// and function have its definition
// Since have its definition it can execute even if body defined below

//* Function Hosting

console.log(aa) // Undefined
var aa = 'aaba';
var aa = 'gbg'
// let aa = 'aaba'; // Error

greet();
//fun declaration
function greet() {
    up = 10;
    console.log('Hi, there.' + up);
    var up;
}

// greet1()//error
// greet2()//error
// greet3() // error greet3 is not a function
console.log(greet3); // undefine
//fun expression
let greet1= function (){}
const greet2 = function (){}
var greet3 = function(){}


// greet1_arrow1()//error
// greet_arrow2()//error
// greet_arrow3()// error greet_arrow3 is not a function
console.log(greet_arrow3);//undefined
let greet_arrow1 = ()=>{}
const greet_arrow2 = ()=>{}
var greet_arrow3 = ()=>{}

console.log('//----------------')

console.log(me);//undefined
//console.log(job); // error
//console.log(year); // error

var me = 'dj';
let jon = 'teacher'
const year = 2000;

// -----------------Arrow-vs-Regular-Function-------
 

const dj = {
    // This is not a block, this is a object literal
    fName : 'Jonas',
    year:1990, 
    f_one : function(){
        console.log(this);
        function fun (){console.log("fun is on ",this.fName);}

        //undefined error -sol-> (dj.fun())
        //or use arrow fun because it don't have its own this keyword
        // arrow fun use this keyword of its parent scope
        fun()
        let f_fun = ()=>{console.log("fun is on ",this.fName);}
        f_fun()


    },
    greet: ()=>{console.log(`Hi ${this.fName}`);}
   
}

// this keyword in this greet fun in this case is referring to global obj 
dj.greet(); // Undefined 

dj.f_one()




//?---------Callback-function-------------------------------
//function that is passed into another function as an argument.

function printLastName(lastName) {
    console.log(lastName)
}

function printFirstName(firstName, lN) {
    console.log(firstName)
    lN('Jakhar')
}

printFirstName('Steve', printLastName)

//-------------

// Call back fn
const isEven = (n) => {
    return n % 2 == 0;
}
// Higher Order fn  which receives call back fn
let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num)
    console.log(isNumEven)
}

printResult(isEven, 10)

// -----------------------------------------------
const num = [1, 2, 3, 4, 5, 6, 7]

// map loop though every element of array and perform specified operations
const squaredNum = num.map((n) => {
    return n * n;
})

//The only difference b/w map and forEach is that forEach Don't allow return statemented
const numForEach_/* Output undefined */ = num.forEach((n) => {
    return n * n;
})
const numForEach = []; 
num.forEach((n) => {
    numForEach.push(n * n)
})

console.log(num, squaredNum, numForEach)


// -------

let hunt = num.find((n) => { if (n > 4) return n })
console.log(hunt)

let evenNum = num.filter/*Return array*/((n) => { return n % 2 == 0 })
console.log(evenNum)


let allSum = num.reduce(
    (acc, value/* every array value */) => {
        let updatedSum = acc + value;
        return updatedSum;
    }, 0/* start value of acc */)
