//Lord, forgive me for what I`m about to write
let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';
let ans = '';
let fvHasPoint = false;
let svHasPoint= false;
let fvSpecialCharacter = false;
let svSpecialCharacter = false;

let button = document.querySelectorAll('.button');
let calcScreen = document.querySelector('#screen');
let reScreen = document.querySelector('#result')

button.forEach(button =>{button.addEventListener('click', (event)=>{
    let id = button.getAttribute('id');
    firstValue = String(firstValue)
    let rawWidth = document.querySelector('#calculator-screen')
    let screenWidth = Math.floor(rawWidth.clientWidth/23.73)

    switch (id){
        case 'AC':
            firstValue = '';
            secondValue = '';
            operator = '';
            result = '';
            fvHasPoint = false;
            svHasPoint= false;
            fvSpecialCharacter = false;
            svSpecialCharacter = false;
            break

        case 'C':
            if (secondValue !== ''){
                if (secondValue.charAt(secondValue.length - 1) == '.'){
                    svHasPoint = false;
            } else if (secondValue == 'ANS' || secondValue == 'π' || secondValue == 'e'){
                    svSpecialCharacter = false;
                    secondValue = '';
            }else{
                secondValue = secondValue.substring(0, secondValue.length - 1);
            }
            } else if (operator !== ''){
                operator = '';
            } else if (firstValue !== ''){
                if (String(firstValue).charAt(firstValue.length - 1) == '.'){
                    fvHasPoint= false;
                }else if (firstValue == 'ANS' || firstValue == 'π' || firstValue == 'e'){
                    fvSpecialCharacter = false;
                    firstValue = '';
                }else{
                    firstValue = String(firstValue).substring(0, firstValue.length -1);
                }
            }
            break
                
        case 'ANS':
            if (firstValue == '' && ans !== ''){
                firstValue = 'ANS';
                fvSpecialCharacter = true;
            } else if (operator !== '' && secondValue == '' && ans !== ''){
                secondValue = 'ANS';
                svSpecialCharacter = true;
            } else{
                alert("Press 'equal' to save a value on ANS. Ans can only be used when it is the only value at the current side of the operator. \n 👍ANS / 5 \n❗5ANS /ANS12")
            }
            break

        case 'π':
            if (firstValue == ''){
                firstValue = 'π';
                fvSpecialCharacter = true;
            } else if (operator !== '' && secondValue == ''){
                secondValue = 'π';
                svSpecialCharacter = true;
            }
            break

        case 'e':
            if (firstValue == ''){
                firstValue = 'e';
                fvSpecialCharacter = true;
            } else if (operator !== '' && secondValue == ''){
                secondValue = 'e';
                svSpecialCharacter = true;
            }
            break
        
        default:
            if (isNaN(parseInt(id)) == false && operator ==''){
                if (!fvSpecialCharacter){
                    firstValue += id;
                }

            } else if (isNaN(parseInt(id)) == false && operator !==''){
                if (!svSpecialCharacter){
                    secondValue += id;
                }
            } else if (isNaN(parseInt(id)) == true && operator ==''){
                if (id == '.'){  
                    if (fvHasPoint == false){
                        firstValue += id;
                        fvHasPoint = true; 
                    }
                } else if(id == '='){
                    
                } else if (firstValue !== ''){
                    operator +=id;
                }

            } else if(isNaN(parseInt(id)) == true && operator !==''){
                if (id == '.'  ){
                    if (svHasPoint == false){
                        secondValue+=id;
                        svHasPoint = true;
                    }
                }else if(id == '='){
                    firstValue = result;
                    ans = result;
                    operator = ''
                    secondValue = '';
                    result = '';
                    svHasPoint= false;
                    svSpecialCharacter = false;
                    fvHasPoint = false;
                    fvSpecialCharacter = false;
                    if (firstValue % 1 != 0){
                        fvHasPoint = true;
                    }
                }else if (secondValue !== ''){
                    firstValue = result;
                    operator = id;
                    secondValue = '';
                    result = '';
                    svHasPoint= false;
                    svSpecialCharacter = false;
                    fvHasPoint = false;
                    fvSpecialCharacter = false;
                    if (firstValue % 1 != 0){
                        fvHasPoint = true;
                    }
                }
            } 
            break
        }

    let fValue = firstValue;
    let sValue = secondValue;

    if (firstValue == 'ANS'){
        fValue = ans;
    }

    if (secondValue == 'ANS'){
        sValue = ans;
    }

    if (firstValue == 'π'){
        fValue = Math.PI;
    }

    if (secondValue == 'π'){
        sValue = Math.PI;
    }

    if (firstValue == 'e'){
        fValue = Math.E;
    }

    if (secondValue == 'e'){
        sValue = Math.E;
    }

    //Screen
    switch (operator){
         case '+':
            result = parseFloat(fValue) + parseFloat(sValue);
            break
        case '-':
            result = parseFloat(fValue) - parseFloat(sValue);
            break
        case '*':
            result = parseFloat(fValue) * parseFloat(sValue);
            break
        case '/':
            result = parseFloat(fValue) / parseFloat(sValue);
            break
        case '^':
            result = parseFloat(fValue) ** parseFloat(sValue);
            break
        case '%':
            result = parseFloat(fValue) % parseFloat(sValue);
            break
    }

    if (isNaN(result)){
        result ='';
    }

    calcScreen.textContent = (firstValue+operator+secondValue).slice(-screenWidth);
    reScreen.textContent = result;
})});