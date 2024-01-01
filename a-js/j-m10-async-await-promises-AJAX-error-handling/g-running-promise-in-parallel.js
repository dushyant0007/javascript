const getJSON = function (url, errorMsg = 'something went wrong') {
    return fetch(url).then(
        response => {
            if (!response.ok)
                throw new Error(`${errorMsg} ${response.status}`)
            return response.json();
        }
    )
}

const get3Countries = async function (c1, c2, c3) {
    try {
        //promise.all also called combinator 
        //if one promise rejects then all promisees rejects as well
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ]);
        console.log(data.map(d=>d[0].capital))
    }
    catch (err) {
        console.log('Error: ' + err);
    }
}

get3Countries('portugal', 'canada', 'finland')