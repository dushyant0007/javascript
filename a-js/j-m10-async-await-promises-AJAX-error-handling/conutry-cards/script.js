'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function (data) {
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

};

// function getCountryData(country) {
//     ///////////////////////////////////////
//     const request = new XMLHttpRequest();
//     request.open(
//         'GET',
//         `https://restcountries.com/v2/name/${country}`
//     );
//     request.send();

//     // its going to be empty
//     // because its take time to load and js print the curr val and moves move to the next line
//     //   console.log(request.responseText);

//     //here we are weaning for request to complete and then execute the code
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data);
//     });
// }

// ['Argentina', 'Australia', 'Brazil', 'Canada', 'China', 'Denmark', 'Egypt', 'France', 'Germany',
//     'India', 'Italy', 'Japan', 'Kenya', 'Mexico', 'Netherlands', 'Norway', 'Russia', 'Spain', 'Switzerland',
//     'United Kingdom', 'United States'].forEach(c => {
//         getCountryData(c);
//     });

//^ ///////////////////////////////////////////////////////////

// /////// Earlier the ajax call are parallel - and we could not control the sequence
// /// let's call ajax calls sequentially
// function getCountry2(country) {
//     const request = new XMLHttpRequest();
//     request.open(
//         'GET',
//         `https://restcountries.com/v2/name/${country}`
//     );
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data);
//         console.log(data)

//         //Get neighbor country;
//         if (!data.borders) return;

//         const [neighbor] = data.borders;

//         const request2 = new XMLHttpRequest();
//         request2.open(
//             'GET',
//             `https://restcountries.com/v2/alpha/${neighbor}`
//         );
//         request2.send();
//         request2.addEventListener('load', function () {
//             renderCountry(JSON.parse(this.responseText))
//         })
//     });
// }

