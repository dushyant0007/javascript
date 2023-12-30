//Sticky navigation

//^ This method is very bad for performance 
//using scroll event for performing a certain action at a certain position of the page 
//is really not the way to go - thats because scroll event here fires all the time no matter 
// how Small the scroll change is

// const initialCoors = document.querySelector('#section--1')
// window.addEventListener('scroll',function(e){
//     console.log(window.scrollY)
//     //if the section1 distance from the top of the window = 0;
//     // make nav sticky
//     if (window.scrollY > initialCoors.top ) 
//         nav.classList.add('sticky')
//     else
//         nav.classList.remove('sticky')
// })

//! ////////////////////////////////////////////////////////////////////////////

// What is intersection observer API
/*
This api allows are code to basically observe changes to the way that a certain target element 
intersect another element, or the way it intersects the viewport
*/

/*
creating a new observer -
 x = new IntersectionObserver(callback,obj-of-options)
x.observe(element/target)
*/

//This function will get called with two arguments
const obsCallBack = function (entries,observer/*obj it self */) {
    // this-callBack fun will get called each time that the observed element,
    // is intersecting the root element at the threshold that we defined
    //number of entries = number .observer(element);
    // console.log(entries)
    entries.forEach((entry)=>{
        // console.log(entry)
    })

}
const obsOptions = {
    //root is the element that the target is intersecting
    root: null, // null/default - window
    //percentage of intersection at which the observer callback will be called
    //we can have multiple thresholds - in an array;
    threshold: [0,0.2],
}

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(document.querySelector('#section--1'));


//-------

const stickyNav = function(entries){
    //here we have only one entry because we only have one element to observe
    const [entry] = entries;
    if(entry.isIntersecting === false)
        document.querySelector('.nav').classList.add('sticky')
    else
        document.querySelector('.nav').classList.remove('sticky')

}

//calculating the height of the nav demonically
const navHeight = document.querySelector('.nav').getBoundingClientRect().height;
console.log(navHeight)

const headerObserver = new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`-${navHeight}px`});
headerObserver.observe(document.querySelector('.header'));
