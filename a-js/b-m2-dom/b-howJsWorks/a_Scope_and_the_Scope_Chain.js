'use strict';

//  // Scope controls where you can access a particular variable and where you can't access them.
//  // JS uses Lexical Scoping, which means that scoping is controlled by the physical placement of functions and blocks in the code.
//  // In JS, we have 3 types of scope: global scope, function scope, and block scope.
/*
Note that only variables declared with let or const are restricted to the block in which they are created.
That means that a variable that is declared using a var would be scoped to the parent function, or else the global scope. Hence, we say that let and const are block scoped whereas var is function scoped. IN ES5 and earlier versions, we only had global scope and function scope.
*/

// function declaration
function calcAge(currYear, birthYear) {
    console.log(`First Name: ${firstName}`);
    let age = currYear - birthYear;

    function logMessage() {
        let output = `${firstName}, you are ${age} years old, and were born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            let str = `You are also a millennial, ${firstName}`;
            console.log(str);

            function concatenateStrings(str1, str2) {
                return str1 + str2;
            }
        }

        // Validate that variables declared 'let' and 'const' are block-scoped
        // This will produce a reference error, because const and let variables are block-scoped.
        // So they are available only inside the block in which they were created:
        // Uncaught ReferenceError: str is not defined
        // console.log(str);

        // Validate that variables declared 'var' are function-scoped
        // But note that the millennial variable is in scope.
        // Because it was declared as a var. And varibales declared with var are function-scoped.
        // i.e. they ignore the block in which they were declared and instead take the scope of their parent function instead.
        if (millennial) console.log(`Are you happy now?`);

        // Validate that functions are block-scoped
        // The following line now produces an error. Because the scope of the concatenateStrings function is the
        // block in which it was defined. But remember that this is valid only for 'strict mode'.
        // If you comment out the 'strict' at the top of the code, then this function will be within scope!!
        // Uncaught ReferenceError: concatenateStrings is not defined
        concatenateStrings('Hello', 'World');
    }

    logMessage();

    return age;
}

const firstName = "Alice";
calcAge(2021, 1990);