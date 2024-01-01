//* Fetch API

// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object


//return a promise
let request = fetch('https://restcountries.com/v2/name/portugal')
//console.log(request) // <pending-state>
setTimeout(() => {
    //console.log(request) // <fulfilled> //after getting data from server
}, 1000)

//what is promise - and what can we do with promise;

/*
Promise:An object that is used as a placeholder for future result of an asynchronous operation;
Promise: A container for an asynchronously returned value;
Promise: A container for a future value(response coming from AJAX call);
*/

let request2 = fetch('https://restcountries.com/v2/name/portd')
    //after the request completed, the then method is called
    .then(response => {

        if(!response.ok)
            //its going to return this error - and catch-going to catch this error
            throw new Error('country not found',response.status)

        //the data is in response.body(readable Stream)
        // to able to ready this data from the body we need to call the json method
        return response.json()//returns a promise (async fun) // parse the body of the text
    }, 
    (error) => console.log('promise-rejected', error))
    .then(data => console.log(data))

    //we can also use catch at the end of the chain
    .catch(error => console.log(error,'got-the-thrown-error'))

    // no matter if the promise is fulfilled or rejected the finally going to execute
    .finally(() => {/* No matter  */ })

//% ////////////////////////////////////////////////////////////////////////

