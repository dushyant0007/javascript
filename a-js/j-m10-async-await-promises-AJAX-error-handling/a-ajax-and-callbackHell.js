'use strict'

//on github there is this huge repo called public-apis - which is a list of fee apis
// in js there are multiple way to do ajax calls
// this is the most old-school on
const request = new XMLHttpRequest();
const results = request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();

// its going to be empty 
// because its take time to load and js print the curr val and moves move to the next line
// console.log(request.responseText)

//here we are weaning for request to complete and then execute the code
request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data)
})

//% //////////////////////////////////////////////////////////////////////////////////

/////// Earlier the ajax call are parallel - and we could not control the sequence
/// let's call ajax calls sequentially
/// call-back-hell // recursive-calls
function newCall(country) {
    const request = new XMLHttpRequest();
    request.open(
        'GET',
        `https://restcountries.com/v2/name/${country}`
    );
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);
        console.log(data)

        //Get neighbor country;
        if (!data.borders) return;

        const [neighbor] = data.borders;

        const request2 = new XMLHttpRequest();
        request2.open(
            'GET',
            `https://restcountries.com/v2/alpha/${neighbor}`
        );
        request2.send();
        request2.addEventListener('load', function () {
            renderCountry(JSON.parse(this.responseText))
        })
    });
}

//% /////////////////////////////////////////////////////////////////////////////////////
