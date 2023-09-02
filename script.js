const answerField = document.getElementById('answer');

let operator = [];
let arrNum = [];

let answer; //this should be float
//              Function Operators
function add(firstNum,nextNum){
    answer = firstNum + nextNum;
}
function minus(firstNum,nextNum){
    answer = firstNum - nextNum;
}
function multiply(firstNum,nextNum){
    answer = firstNum * nextNum;
}
function divide(firstNum,nextNum){
    answer = firstNum / nextNum;
}

//              Display and Operation
function displayNumber() {
    answerField.textContent = answer;
}
function displayValues(i) {
    answerField.textContent = arrNum[i];
}
function operate(operation, firstNum, secondNum){
    operation(firstNum,secondNum);
}


const numberButtons = document.querySelectorAll('.number');//try to convert in array list
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const signButton = document.getElementById('sign');
const decimalButton = document.getElementById('.');
const equalButton = document.getElementById('=');

i = 0;
//              Event Listeners for Buttons
numberButtons.forEach(button=>{
    button.addEventListener('click',() => {
        if(arrNum[i] !== undefined){
            arrNum[i] += button.id;
        }else{
            arrNum[i] = button.id;
            
        }
        displayValues(i);
        console.log("\n" + arrNum[i]);
    });
});

operatorButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        i = 1; 
        if(arrNum[1] !== undefined){
            if(operator[i] == "+"){
                operate(add,parseFloat(arrNum[0]),parseFloat(arrNum[1]));
                console.log(answer);
            }else if(operator[i] == "-"){
                operate(minus,parseFloat(arrNum[0]),parseFloat(arrNum[1]));
                console.log(answer);
            }else if(operator[i] == "*"){
                operate(multiply,parseFloat(arrNum[0]),parseFloat(arrNum[1]));
                console.log(answer);
            }else if(operator[i] == "/"){
                operate(divide,parseFloat(arrNum[0]),parseFloat(arrNum[1]));
                console.log(answer);
            }
            arrNum[0] = answer;
            arrNum[1] = "";
            displayNumber();
        }
        operator[1] = button.id;
        
    });
});

equalButton.addEventListener('click', () => displayNumber());



