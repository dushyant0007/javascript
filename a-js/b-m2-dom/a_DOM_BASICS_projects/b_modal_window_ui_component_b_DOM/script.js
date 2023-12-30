'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')

// if multiple elements of same class name
//Only the first one going to be selected so to select all we use querySelectorAll
// const btnsOpenModal = document.querySelector('.show-modal')

const btnsOpenModal = document.querySelectorAll('.show-modal')

for(let i = 0 ;i < btnsOpenModal.length;i++){
    console.log(btnsOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })); 
}


function closeModalFun(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click',closeModalFun)
overlay.addEventListener('click',closeModalFun)



// info about which key is pressed will be stored in the event
// that is gonna occur as soon as any key is pressed
// eventListener listen for keydown event js generate an object(name=keyboardEvent)
// and that Object contain all the info about event as we 
// can access that object in the event handler fun 

//keydown  - fired  -  as we press the key
//keyup - fired when we left the finger off the key
//keypress - fired continuously  as we keep are finger on the key

// closing model on pressing escape keydown 
//As the event occurs js call this fun with the event object as an argu
document.addEventListener('keydown',(eventE)=>{
    console.log(eventE);
    if(eventE['key']=='Escape'&&!modal.classList.contains('hidden')){
        closeModalFun(); 
    }
})
