const h1 = document.querySelector('h1')

//+ Going Downwards
console.log(h1.querySelectorAll('.highlight')); //look for all children no matter how deep
console.log(h1.childNodes);// for direct children // return node list // return all types of nodes(text,comment..etc) 
console.log(h1.children); // for direct children return htmlCollection(Live/Life) // return only html elements

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';


//+ Going Upwards

console.log(h1.parentNode); // print direct parent
console.log(h1.parentElement); // in this case both are same

//closest parent with class .header
h1.closest('.header').style.background = 'pink';

//this is gonna be exactly the element itself
h1.closest('h1').style.background = 'pink';


//+ Going sideways : siblings

//in js we can only access direct siblings so basically only the previous and the next one
console.log(h1.previousElementSibling); // element
console.log(h1.nextElementSibling); // element

console.log(h1.nextSibling); // Nodes
console.log(h1.nextSibling); // Nodes

//To select all the siblings not just previous and next one -> move up and read all the children from there
console.log(h1.parentElement.children); 

//its not an array but it is still an iterable that we can spread into an array
[...h1.parentElement.children].forEach(function(element){
  if(element!==h1) element.style.transform =  'scale(0.5)'
})