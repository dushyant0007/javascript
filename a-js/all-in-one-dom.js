/*
    document.getElementById()        // Element OR Null
    document.getElementsByClassName  // HTML collection (live connection)
    document.getElementsByTagName    // HTML collection // Array.from(-) - convertToArray
    document.querySelector()         // Element or null
    document.querySelectorAll()      // NodeList
*/


/*
    DOM navigation

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children // HTML collection
*/

/*

    //Add elements

    div id="box1" class="box"
        p box1 /p
    /div   

    div id="box2" class="box"
        p box2 /p
    /div  

    div id="box3" class="box"
        p box3 /p
    /div   

    div id="box4" class="box"
        p box4 /p
    /div    
    
    // 1. create element
    const newH1 = document.createElement("h1(tagName)");

    // 2. add attributes/properties
    newH1.textContent = "I Like Pizza";
    new.id = 'myH1';

    // 3. append element to dom
    document.body.append(newH1); // append as last child
    document.body.perpend();
    document.getElementById().addend/prepend(newH1);
    
    const box2 = document.getElementById('box2');
    document.body.insertBefore(newH1,box2);
     

    //remove elements
    document.getElementById('box').removeChild(newH1);
*/

/*

//class list property

    button id="theButton"
        The button
    /button

    const theButton = document.getElementById('theButton');
    theButton.classList.add("enabled");
    theButton.classList.remove("enabled");
    theButton.classList.toggle("enabled");
    theButton.classList.replace("oldClass","newClass");
    theButton.classList.contains('thisClass')



*/