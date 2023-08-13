let firstNum;
let secondNum;
let operator;

const numberDisplay = document.querySelector('h1');

let answer = "trial"; //this should be float
function add(num1,num2){
    answer = num1 + num2;
    return answer;
}
function minus(num1,num2){
    answer = num1 - num2;
    return answer;
}
function multiply(num1,num2){
    answer = num1 * num2;
    return answer;
}
function divide(num1,num2){
    answer = num1 / num2;
    return answer;
}

function displayNumber() {
    numberDisplay.textContent = answer;
}

function operate(operator, firstNum,secondNum){
    operator(firstNum,secondNum);
    displayNumber();
}





