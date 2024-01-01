//promise -
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object


const number = 20;
try {
    if(number > 50) {
        console.log('Success');
    }
    else if (number < 50){
        // user-defined throw statement
        throw new Error('The number is low');
    }
    else {
        // You can also use other built-in error constructors for standard errors:
        //  TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError.
        throw new TypeError("The number is equal to  50");
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(myError) {
    if(number%2==0){
        throw new Error("Even number error"+ myError)
    }
    else {
        console.log('An error caught'); 
        console.log('Error message: ' + myError);  
    }
}