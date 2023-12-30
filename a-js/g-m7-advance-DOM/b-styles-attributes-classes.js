
//- STYLES

// style set as inline styles (inside the html tag)
//* element.style.propertyName = ''

// return the style only if it is applied inline(inside html tag)
//* console.log(element.style)

//This returns the object of all the styles applied on the element
//* getComputedStyle(element)

//Snippet - increase height by 40px
//*element1.style.height = Number.parseFloat(getComputedStyle(element1).height)+40+'px';


/*
 / css file
 :root{
    --primaryColor : #3438db;
 }

* document.documentElement.style.setProperty('variableName(--primaryColor)','value(#3654ab)')
 
*/

//Attributes
/*
*const logo = document.querySelector('.nav__logo');
*console.log(logo.alt)
*console.log(logo.src)

/the class is a reserved keyword / 
*console.log(logo.className) / o/p looksLike - 'className1 cN2 cn3 ...CNn' /


/ <div tot='joke'><div>
/You can also madeUp attributes and add in html tag and get/set there values from/to html tag
*logo.getAttribute('attributeName')
*logo.setAttribute('tot','tot-Value')

*console.log(logo.alt) // http:127.0.0.1:8080/img/logo.png
*console.log(logo.getAttribute('src')) //  img/logo.png

! Data Attributes-special kind of attributes - start with 'data-xxx-xxx-xx-xx...'
<img src='img/logo.png' data-version-number='3.0' />
/The special attributes are stored in dataset obj/ "-"to camelCase
console.log(logo.dataset.versionNumber)

*/

//^ Classes
// logo.classList.add('');
// logo.classList.remove('');
// logo.classList.toggle('');
// logo.classList.contains('');

//$ Don't use this - this will remove all the other-classes
// logo.className = 'add-this-class'
