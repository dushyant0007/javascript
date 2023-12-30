//Selecting DocumentElement
// for there special elements we don't need to write any selector 
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)
// but otherwise we can use 
document.querySelector()
document.getElementById();

//This method returns a html collection
// That is different form a node list because
// an html collection is actually a so-called life/live collation
// that means that if the dom changes then this collection
// is also immediately updated automatically
document.getElementsByTagName('button')

// This same does not happen with node list
//if element is deleted from dom - 
//the variable in which the node list is saved will not update automatically

// This also return live html collection
document.getElementsByClassName()

/////////////////////////////////////////////////////////////////////////////////

//- Creating and inserting elements
// .insertAdjacentHTML

const myDiv = document.getElementById('myDiv');
header.insertAdjacentHTML('beforeend', '<p>Inserted text</p>');

//* ------------------

//This here creates a dom element and then store that element
//into the variable, now that element is not yet anywhere in our dom
// all this is a dom object that we can now use to do something not it.
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent='Hello World!';
message.innerHTML = '<p>This is the paragraph</p>'

//* -------inserting element

//first-child inside header
header.prepend(message);
//last-child inside header
header.append(message);
/*
now what we see is that the element is only inserted once
now that's because this element here - is a life/live element living in the dom
so there four it can't be at multiple places at the same time.
so what happened here is that we first prepended the element 
and then we appended it.
what the append() did there was to basically move the element 
from being teh first child to being the last child.
 
This means we can we prepend() and append() methods(before and after methods also) not only to insert element
but also to manage their positioning within the DOM tree.
this because a dom element is unique, so it can always exist as one place at a time

But now what if we actually wanted to insert multiple copies of 
same element,Well in that case we actually would have to first copy the first element
*/

//if we pass true that all the child element also be copied
header.append(message.cloneNode(true))


//---------

//as a sibling
header.before(message.cloneNode(true));
// header.after(message)

////////////////////////////
//-Delete Element 
message.remove()

// in old times
message.parentElement.removeChild(message);