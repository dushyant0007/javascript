
const h1 = document.querySelector('h1');


const alertH1 =function(e){
    alert('addEventLister: Great! you are reading the heading :D')

    //we can use setTimeout()  -  to remove the event after a perticular item
    h1.removeEventListener('mouseenter',alertH1);
    //to remove an eventLister we have to define the function separately
    // to pass its reference to the removeEventListener method
}

//Also see - MDN evens  - to discover all types of events
//Whenever mouse enters in  a element
h1.addEventListener('mouseenter',alertH1);

//! ------

//all elements have this on-someEvent property
//another way of attaching a event listener // OldSchool
h1.onmouseenter = function(e){
    console.log('the mouse is entered  in h1 ')
}

//we can add multiple event-listener to the same event - and they all will work
// but using the old way the second eventlistener on same property overwrite the first one

//! we can handel events inside the html tag //Not recommended
{/* <h1 onclick="alert('HTML alert')"> */}
//  he.onclick = ()=>{}; // same thing just accessing with js

