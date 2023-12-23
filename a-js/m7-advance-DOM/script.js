'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//// | Smooth scrolling
// ----
//To make this more efficient - we use event delegation
// we use the fact that events bubble up 
// and we do that by putting the eventListener on a common parent of all the elements that we are interested in

// document.querySelectorAll('.nav__link').forEach
//   (function(el){
//     el.addEventListener('click',function(e){
//       e.preventDefault();
//       const id = this.getAttribute('href');
//       console.log(id)
//       document.querySelector(id).scrollIntoView({behavior:'smooth'});
  
//     })
//   });

// ----

// the another use case of event delegation , Which is when we are working with elements 
// that are not yet no page on run time, so by the time page loads.
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();

  //e.target = the perticular element on which the event happened
  console.log(e.target,'----1-----')
  
  if(e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--btn')){ 
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior:'smooth'})
  }
})


// //////////////////////|