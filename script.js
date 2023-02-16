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
    isNaN(parseInt(id))

    switch (id){
        case 'AC':
            screen = '';
            firstValue = '';
            secondValue = '';
            operator = '';
            counter = 1;
            result = '';
            break

        case 'C':
            screen = screen.substring(0, screen.length - 1)
            if (counter = 1 && operator ==''){
                firstValue = firstValue.substring(0, firstValue.length - 1)
            } else if (counter = 1 && operator !==''){
                operator = '';
                counter = 1;
            }else{
                secondValue = secondValue.substring(0, secondValue.length - 1)
            }
            break

        case 'π':
            if (counter = 1);


        default:
            if (counter == 1){
                if(isNaN(parseInt(id)) == false){
                    firstValue += id
                    screen += id;
                } else{
                    operator = id;
                    counter = 2;
                    screen += id;
                }

            } else if (counter = 2){
                if (isNaN(parseInt(id)) == false){
                    secondValue += id;
                    screen += id;

                } else{
                    if (id == '='){
                        switch (operator){
                            case '+':
                                result = parseInt(firstValue)+ parseInt(secondValue)
                                break
                            case '-':
                                result = parseInt(firstValue)- parseInt(secondValue)
                                break
                            case '*':
                                result = parseInt(firstValue)* parseInt(secondValue)
                                break
                            case '/':
                                result = parseInt(firstValue)/ parseInt(secondValue)
                                break
                            case '^':
                                result = parseInt(firstValue)** parseInt(secondValue)
                                break
                            case '%':
                                result = parseInt(firstValue)% parseInt(secondValue)
                                break
                        }
                        reScreen.textContent = result;
                    } else{
                        alert('Introduce a number')
                    }
                }

            }

    }
    calcScreen.textContent = screen;
    reScreen.textContent = result;
})})