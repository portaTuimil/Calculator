//Lord, forgive me for what I`m about to write
let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';
let screen = '';
let counter = 1;




let button = document.querySelectorAll('.button');
let calcScreen = document.querySelector('#screen');
let reScreen = document.querySelector('#result')

button.forEach(button =>{button.addEventListener('click', (event)=>{
    let id = button.getAttribute('id');
    //Counter Actualizer
    if (operator == ''){
        counter = 1;
    } else{
        counter = 2;
    }

    switch (id){
        case 'AC':
            firstValue = '';
            secondValue = '';
            operator = '';
            counter = 1;
            result = '';
            break
    
        case 'C':
            if (secondValue !== ''){
                secondValue = secondValue.substring(0, secondValue.length - 1)
            } else if (operator !== ''){
                operator = '';
            } else if (firstValue !== ''){
                firstValue = firstValue.substring(0, firstValue.length - 1)
            }
            break
    
        default:
            if (isNaN(parseInt(id)) == false && operator ==''){
                firstValue += id;
            } else if (isNaN(parseInt(id)) == false && operator !==''){
                secondValue+= id;
            } else if (isNaN(parseInt(id)) == true && operator ==''){
                if (id == '.'){
                    if (operator == ''){
                        firstValue += id;
                    } else{
                        alert('How in the earth did you get here')
                    }
                }else{
                    operator +=id;
                }
            } else if (isNaN(parseInt(id)) == true && operator !==''){
                if (id == '.'){
                    secondValue+=id;
                }
            } else{
                alert('Thats not posible')
            }
        }

    //Pantalla
    switch (operator){
         case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue)
            break
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue)
            break
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue)
            break
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue)
            break
        case '^':
            result = parseFloat(firstValue) ** parseFloat(secondValue)
            break
        case '%':
            result = parseFloat(firstValue) % parseFloat(secondValue)
            break
    }
    if (isNaN(result)){
        result =''
    }
    screen = firstValue+operator+secondValue;
    calcScreen.textContent = screen;
    reScreen.textContent = result;
})})