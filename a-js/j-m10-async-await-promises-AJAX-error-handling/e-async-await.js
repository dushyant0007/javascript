// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object

/*
# in modules (ES2020) we can now use await keyword outside of a async fun 
# which is called top level await
*/

function whereAmI1() {
    return new Promise(function (resolve, reject) {

        // navigator.geolocation.getCurrentPosition(
        //     position=>resolve(position),
        //     err => rejects(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};


//async to make the function asynchronous
// when this function is done then it automatically returns a promise
// we cant use await without async fun - at-least for now
async function whereAmI(country) {
    try {
        //here we can have multiple await statements
        //await will stop the code execution at this point of the function
        //until the promise is fulfilled
        const res = await fetch(`https://restcountries.com/v2/name/${country}`)
        if (!res.ok) throw new Error('problem-getting result')
        const data = await res.json();
        //return 10; // return a promise with value 10 // (resolved value fo the promise)
        return data;
    }
    catch (err) {
        console.log("error-block", err);
        //rejected promise returned from the async fun
        throw err;

        //if i have written return err; -it will go to .than((here)=>{})
    }
}

//^ the async and await are simply syntactic sugar over the then method in promises

//a is a promise
//value inside the promise won't be accessible synchronously without using .then() or await.
let a = whereAmI('inoi')

//at this point of the code the js has simply no way of knowing yet
//there's a data-var that we want ;
/*
 now the value that we return from an async fun, will become the fulfilled value
 of the promise that is returned by the function
*/
console.log(a) //  return a pending promise (make sense)

//----------------------------------

//if any error is occurred in try block then
// execution will never reach to return statement in whereAmI fun
//even if there was an error in async fun, the promise that the async fun returns is still fulfilled
// and not rejected 
// if we want to catch that error in .catch(below) then we have to rethrow that error from catch block (above)

a.then((val) => console.log('--11--',val, '--11--'))
    .catch((err) => { console.log('--22--',err, '--22--') })
    .finally(() => { console.log('everything is done') });

//--or

(async function () {
    try {
        const data = await whereAmI('usa');
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
    console.log('finally everything is done');
})();

// -----------------------------
