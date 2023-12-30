
//Create a date 

const { format } = require("path");

// UTC time -  0 degree longitude - greenwich England
const now_ = new Date();
console.log(now_) // now is a object

//The months is 0 based (0 - jan)
// year / month / date / hour / min / sec //
console.log(new Date(2037,10,19,15,23,5))

// js auto correct the date
console.log(new Date(2037,15,19,15,23,5))
// there is only 12 months ( 0 - 11) and i wrote 15 
// so js is going to make it april


//* The date constructor also takes the amount of  milliseconds
// since the beaning of the unix time which is jan 1st 1970

const now = new Date();
console.log(now.getFullYear()) // number
console.log(now.getMonth()) // number
console.log(now.getDate()) // number
console.log(now.getDay()) // day of the week
console.log(now.getHours())  // number
console.log(now.getMinutes()) // number
console.log(now.getSeconds()) // number
console.log(now.toISOString()) //2023-12-21T20:48:28.651Z

console.log(now.getTime(),'--------') // timestamp (milliseconds since 1jan 1970)
console.log(Date.now()) // timestamp (milliseconds since 1jan 1970)



const old = new Date(2003,7,22);
console.log(old)
console.log(Number(old)) // convert date to milliseconds
const diff = (Date.now() - Number(old))/(1000 * 60 * 60 * 24 * 365);
console.log(diff)

// Internationalization

console.log(new Intl.DateTimeFormat('en-US').format(now));


const options = {
    hour:'2-digit',
    minute:'numeric',
    day:'2-digit',
    month:'long',
    year:'numeric',
    weekday:'short'

}

console.log(new Intl.DateTimeFormat('en-US',options).format(now));



console.log(new Intl.NumberFormat('en-IN',{style:'currency',currency:'EUR'}).format(400000))
