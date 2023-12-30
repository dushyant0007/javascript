// The component has the class of operations
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content')


// if we do it , this way - it going to make tabs.len no. of copies of callback fun
tabs.forEach(t=>t.addEventListener('click',()=>console.log(('TSB'))));

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    console.log(tabsContent,'----3---')
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
    // Activate tab
    clicked.classList.add('operations__tab--active');
  
    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });