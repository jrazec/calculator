let firstNum;
let secondNum;
let operator;
let stringNum = "";//string
let answer = "trial"; //this should be float

const numberDisplay = document.querySelector('h1');
const numberButtons = document.querySelectorAll('.number');//try to convert in array list
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const signButton = document.getElementById('sign');
const decimalButton = document.getElementById('.');
const equalButton = document.getElementById('=');

//              Event Listeners for Buttons
numberButtons.forEach(button=>{
    button.addEventListener('click',() => {
        stringNum += button.id;
    });
});

//              Function Operators
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

//              Display and Operation
function displayNumber() {
    numberDisplay.textContent = answer;
}

function operate(operator, firstNum,secondNum){
    operator(firstNum,secondNum);
    displayNumber();
}

operate(add, 2000, 100);



