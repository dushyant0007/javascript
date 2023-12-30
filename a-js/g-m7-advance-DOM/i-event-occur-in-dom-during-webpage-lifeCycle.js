//Lets take a quick look at a couple of different events that occurs in the DOM during a webpage's 
// life cycle , and when we say life cycle - we mean right form the movement that the page is first
// accessed, until the user leaves it \.

//| Event-1 /-> DOM content loaded
//this event is fired by the document as soon as the HTML is completely parsed 
// which means that the HTML has been downloaded and Also all scripts must be downloaded and executed
// before the DOM content loaded event can happen
// THIS event does actually not wait for images and other external resources to load.

document.addEventListener('DOMContentLoaded',function(e){
    console.log('HTML parsed and DOM tree build',e)
})

//| Event-2 /-> Load 

// fired by window. As soon as - not only the HTML is parsed but also all the images
//and external resources like css files are also loaded

window.addEventListener('load',function(e){
    console.log('External resources loaded ',e)
})

//| Event-3 /-> before unload event
//This event fires just before the browser is closed/refresh or navigates away from the current web page

window.addEventListener('beforeunload',function(e){
    // Cancel the event (preventing the window from closing immediately)
    e.preventDefault();
    console.log('before unload/exit ',e)

    //In order to display a leaving confirmation 
    // we need to set the returnValue to an empty string;
    e.returnValue = ''
    // long time ago developers were actually  able to customize the leave site message 
    // then many people started to abuse this, as so now we can only see it as a generic message.

    return ''; // This line is also used for some older browsers
})

