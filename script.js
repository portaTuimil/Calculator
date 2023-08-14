//Lord, forgive me for what I`m about to write
let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';
let ans = '';
let fvHasPoint = false;
let svHasPoint= false;
let fvHasAns = false;
let svHasAns = false;


let button = document.querySelectorAll('.button');
let calcScreen = document.querySelector('#screen');
let reScreen = document.querySelector('#result')

button.forEach(button =>{button.addEventListener('click', (event)=>{
    let id = button.getAttribute('id');
    firstValue = String(firstValue)

    switch (id){
        case 'AC':
            firstValue = '';
            secondValue = '';
            operator = '';
            result = '';
            fvHasPoint = false;
            svHasPoint= false;
            fvHasAns = false;
            svHasAns = false;
            break

        case 'C':
            if (secondValue !== ''){
                if (secondValue.charAt(secondValue.length - 1) == '.'){
                    svHasPoint = false;
                } else if (secondValue == 'ANS'){
                    svHasAns = false;
                }
                secondValue = secondValue.substring(0, secondValue.length - 1);
            } else if (operator !== ''){
                operator = '';
            } else if (firstValue !== ''){
                if (String(firstValue).charAt(firstValue.length - 1) == '.'){
                    fvHasPoint= false;
                }else if (firstValue == 'ANS'){
                    fvHasAns = false;
                }
                firstValue = String(firstValue).substring(0, firstValue.length -1);
            }
            break
                
        case 'ANS':
            if (firstValue == '' && ans !== ''){
                firstValue = 'ANS';
                fvHasAns = true;
            } else if (operator !== '' && secondValue == '' && ans !== ''){
                secondValue = 'ANS';
                svHasAns = true;
            } else{
                alert("Press 'equal' to save a value on ANS. Ans can only be used when it is the only value at the current side of the operator. \n 👍ANS / 5 \n❗5ANS /ANS12")
            }
            break
        
        default:
            if (isNaN(parseInt(id)) == false && operator ==''){
                if (!fvHasAns){
                    firstValue += id;
                }

            } else if (isNaN(parseInt(id)) == false && operator !==''){
                if (!svHasAns){
                    secondValue += id;
                }
            } else if (isNaN(parseInt(id)) == true && operator ==''){
                if (id == '.'){  
                    if (fvHasPoint == false){
                        firstValue += id;
                        fvHasPoint = true; 
                    }
                } else if(id == '='){
                    
                } else{
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
                    operator = ''
                    secondValue = '';
                    result = '';
                    svHasPoint= false;
                    svHasAns = false;
                    fvHasPoint = false;
                    fvHasAns = false;
                    if (firstValue % 1 != 0){
                        fvHasPoint = true;
                    }
                }else{
                    firstValue = result;
                    operator = id;
                    secondValue = '';
                    result = '';
                    svHasPoint= false;
                    svHasAns = false;
                    fvHasPoint = false;
                    fvHasAns = false;
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
        case '=':
            ans = result;
            break
    }

    if (isNaN(result)){
        result ='';
    }

    console.log(firstValue);
    console.log(operator);
    console.log(secondValue);
    calcScreen.textContent = firstValue+operator+secondValue;
    reScreen.textContent = result;
})});