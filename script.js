const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');
const button0 = document.querySelector('.button0');
const buttonDeciaml = document.querySelector('.buttonDecimal');
const buttonEquals = document.querySelector('.buttonEquals');
const buttonPlus = document.querySelector('.buttonPlus');
const buttonMinus = document.querySelector('.buttonMinus');
const buttonMultiply = document.querySelector('.buttonMultiply');
const buttonDivide = document.querySelector('.buttonDivide');
const buttonClear = document.querySelector('.buttonClear');
const inputDiv = document.querySelector('.inputDiv');

let operand1 = operand2 = operator = result = null;
function clearInput()
{
    inputDiv.firstChild.value = '';
    operand1 = operand2 = operator = result = null;
}
function writeInput()
{
    
    if(operand1 == null && operator == null)
    {
        operand1 = this.textContent;
        inputDiv.firstChild.value = this.textContent;
    }
    else if(operator == null) 
    {
        operand1 += this.textContent;
        inputDiv.firstChild.value += this.textContent;
    }
    else if( operator != null && operand2 == null)
    {
        operand2 = this.textContent;
        inputDiv.firstChild.value = this.textContent;
    }
    else if(operand1 != null && operator != null && operand2 != null)
    {
        operand2 += this.textContent;
        inputDiv.firstChild.value += this.textContent;
    }
}
function setOperator()
{
    if(operand1 != null && operand2 != null)
        finishEquation();
    else if(operand1 != null && result != null)
        finishEquation();
    else if(operand2 != null && operator != null)
        finishEquation();
    operator = this.textContent;
    
}
function finishEquation()
{
    if(operand1 == null && result == null && operand2 == null)
        return;
    else if(operand1 == null)
        operand1 = result;
    else if(operator != null && operand2 == null && result != null)
    { 
        operand2 = operand1;
        operand1 = result;
        console.log(operand1,operand2,result);
    }
    switch(operator)
    {
        case '+':
            result = -(-operand1 - operand2);
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '×':
            if(operand1 == null) 
                operand1 = 1;
            result = operand1 * operand2;
            result = result.toFixed(4);
            break;
        case '÷':
            if(operand1 == null)
            {
                operand1 = operand2;
                operand2 = 1; 
            }
            result = operand1 / operand2;
            result = result.toFixed(4);
            break;
        default:
            result = operand1;
            break;
    }
    operand1 = operand2 = operator = null;
    inputDiv.firstChild.value = result;
}
button1.addEventListener('click',writeInput);
button2.addEventListener('click',writeInput);
button3.addEventListener('click',writeInput);
button4.addEventListener('click',writeInput);
button5.addEventListener('click',writeInput);
button6.addEventListener('click',writeInput);
button7.addEventListener('click',writeInput);
button8.addEventListener('click',writeInput);
button9.addEventListener('click',writeInput);
button0.addEventListener('click',writeInput);
buttonDeciaml.addEventListener('click',writeInput);
buttonPlus.addEventListener('click',setOperator);
buttonMinus.addEventListener('click',setOperator);
buttonMultiply.addEventListener('click',setOperator);
buttonDivide.addEventListener('click',setOperator);
buttonEquals.addEventListener('click',finishEquation);
buttonClear.addEventListener('click',clearInput);