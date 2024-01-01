// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object


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
    //here we can have multiple await statements
    //await will stop the code execution at this point of the function
    //until the promise is fulfilled
    const res = await fetch(`https://restcountries.com/v2/name/${country}`)
    const data = await res.json();
    //return 10; // return a promise with value 10 // (resolved value fo the promise)
    return data;
}

//^ the async and await are simply syntactic sugar over the then method in promises

//a is a promise
//value inside the promise won't be accessible synchronously without using .then() or await.
let a = whereAmI('india')

//at this point of the code the js has simply no way of knowing yet
//there's a data-var that we want ;
/*
 now the value that we return from an async fun, will become the fulfilled value
 of the promise that is returned by the function
*/
console.log(a) //  return a pending promise (make sense)

//----------------------------------
a.then((val)=>console.log(val))
.catch((err)=>{console.log(err)})
.finally(()=>{console.log('everything is done')})

//--or

(async function(){
    try{
        const data = await whereAmI('usa');
        console.log(city)
    }
    catch(err){
        console.log(err)
    }
    console.log('finally everything is done')
})();

// -----------------------------