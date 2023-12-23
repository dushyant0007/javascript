

//| Smooth Scrolling

const btnScrollingTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollingTo.addEventListener('click', function (e) {

    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords)



/*  domReact{ bottom:53.890625,height:28.5,left:238,right:350.4609375,
    top:25.390625,width:112.4609375,x:238,y:25.390625 }*/
    // y==distance from the top of the view port (varies when scroll)
    // top == distance from the top the page 
    console.log(e.target.getBoundingClientRect())


    //current scroll (x/y) 0 277
    console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset)

    console.log('height/width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth)

    //Scrolling
    // window.scrollTo(s1coords.left+window.pageXOffset
    //     ,s1coords.top + window.pageYOffset);

    //smooth scrolling
    window.scrollTo({
        left:s1coords.left+window.pageXOffset,
        top:s1coords.top+window.pageYOffset,
        behavior:'smooth',
    })

    //modern - way
    section1.scrollIntoView({behavior:'smooth'})

});