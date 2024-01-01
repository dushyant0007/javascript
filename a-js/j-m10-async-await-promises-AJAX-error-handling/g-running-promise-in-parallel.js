const getJSON = function (url, errorMsg = 'something went wrong') {
    return fetch(url).then(
        response => {
            if (!response.ok)
                return Promise.reject('reject-hi')
                // throw new Error(`${errorMsg} ${response.status}`)

            return response.json();
        }
    )
}

// console.log(getJSON(`https://restcountries.com/v2/name/india`))

const get3Countries = async function (c1, c2, c3) {
    try {

        //promise.all also called combinator 
        /*
        return a single promise that resolves when all the given promises have resolved,
        or rejects immediately if any of the promises are rejected.
        */ 

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ]);
        console.log(data,'--2--')
        console.log(data.map(d=>d[0].capital))

        // if data is rejected-promise/error - we will get it in catch block
        // since one promise rejected it will return that rejected promise
    }
    catch (err) {
        console.log('Error: ' + err);
    }
}

get3Countries('portugal', 'lbblj', 'finland');

///----------------------

//% 4 types of combaters
// Promise.all
//  Promise.rase



//Promise.race -
/*
receives an array of promises - and also return a promise
return a new promise as soon as the first promise in the iterable resolves or rejects.
*/

(async function(){
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/india`),
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/germany`)
    ]);
    console.log(res[0].capital,'-')
})()

///////////////////////////////////////

/*
//Promise.allSettled() - used to handle multiple promises
//  concurrently and returns a promise that resolves after all the given promises
//  have settled (either fulfilled or rejected).

//take assay of promises - and it will simply return an array of all settled(res.rej) promises
*/

/////////////////////////////////////////////

/*
// Promise.any
_ take in an array of multiple promises and return first fulfilled promise and ignore rejected promises

*/