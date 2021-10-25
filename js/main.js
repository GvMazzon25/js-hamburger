//Element Selection
const buttonHamb = document.querySelector('.hamburger-menu');
const fas = document.querySelector('.fas')
const closeButton = document.querySelector('.close')

fas.addEventListener('click', function(){
    //First click
   buttonHamb.classList.add('active')
})

 //Second click
 closeButton.addEventListener('click', function(){
    //First click
   buttonHamb.classList.remove('active'); 
})