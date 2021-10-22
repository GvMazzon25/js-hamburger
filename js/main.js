//Element Selection
const buttonHamb = document.querySelector('.hamburger-menu');
const fas = document.querySelector('.fas')

fas.addEventListener('click', function(){
   //buttonHamb.classList.add('d-block');
   buttonHamb.style.display = 'block';
})