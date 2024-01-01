'use strict'

const arr = ['Argentina', 'Australia', 'Brazil', 'Canada', 'China', 'Denmark', 'Egypt', 'France', 'Germany',]

// const request = fetch(`https://restcountries.com/v2/name/${country}`)

// const getCountry3 = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         //after the request completed, the then method is called
//         .then((response) => {
//             response;

//             //the data is in response.body(readable Stream)
//             // to able to ready this data from the body we need to call the json method

//             response.json()//returns a promise (async fun) // parse the body of the text returned
//                 .then((data) =>renderCountry(data[0]))
//         })

// };


// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object


const getCountryData = function(country){
    let req = fetch(`https://restcountries.com/v2/name/${country}`)
            .then(response =>  {

                if(!response.ok)
                    throw new Error('country-not-found','HTTP-Error: '+response.status);
                
                return response.json()
            })
            .then(data => {
                renderCountry(data[0]);
                if(!data[0].borders) return;
                const [neighbor] = data[0].borders;
                if(!neighbor) return;
                fetch(`https://restcountries.com/v2/alpha/${neighbor}`)
                .then(response => response.json())
                .then(data => renderCountry(data))
            }).catch(c=>console.log('error-caught',c))
             
}

arr.forEach((c) => {getCountryData(c)})

///////////////////////////////////////////
const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
    return new Promise(function(resolve,reject){
        let img = document.createElement('img'); 
        img.src = imgPath;
        img.addEventListener('load',function(){
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error',function(){
            reject(new Error('Image not found'));
        })
    }) 
}

createImage('./img/img-1.jpg').catch((e)=>console.log(e))
createImage('./img/img-2.jpg').catch((e)=>console.log(e))
createImage('./img/img-3.jpg').catch((e)=>console.log(e))
