let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';
let screen = '';




let button = document.querySelectorAll('.button');
let calcScreen = document.querySelector('#screen');
let reScreen = document.querySelector('#result')

button.forEach(button =>{button.addEventListener('click', (event)=>{







    //Screen:
    screen += button.getAttribute('id');
    calcScreen.textContent = screen;
    reScreen.textContent = result;
    alert(screen)
})})