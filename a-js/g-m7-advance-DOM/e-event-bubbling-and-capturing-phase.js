
// random number generator
const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min)

const randomColor = ()=> `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`


// .addEventListener method only listen for the events in bubbling phase not in the capturing phase
// this is the default behavior of this method - and the reason for that is - the capturing phase
// is usually irreverent for us - its just not that useful - now on the other hand bubbling phase can be 
// very useful for event delegation (in next lecture)
// however if we really do want to catch events during the capturing phase we can define a third
// parameter in the addEventListener function true
document.querySelector('.nav__link')
.addEventListener('click',function(e){
    //In event handler "this" refers to element on which event handler is attached
    this.style.backgroundColor = randomColor();

    //e.target = the perticular element on which the event happened
    console.log('Link',e.target,e.currentTarget);
    console.log(e.currentTarget === this);

    //This will stop the bubble-up of the event
    //so parent elements can't execute this event
    e.stopPropagation()
})
document.querySelector('.nav__links') 
.addEventListener('click',function(e){
    this.style.backgroundColor = randomColor();
    console.log('Link',e.target,e.currentTarget);
    console.log(e.currentTarget === this);
})
document.querySelector('.nav')
.addEventListener('click',function(e){
    this.style.backgroundColor = randomColor();
    console.log('Link',e.target,e.currentTarget);
    console.log(e.currentTarget === this);
})