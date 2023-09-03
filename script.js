const answerField = document.getElementById('answer');

let operator;
let arrNum = [];

let answer; //this should be float
//              Function Operators
function add(firstNum,nextNum){
    answer = firstNum + nextNum;
    answer = parseFloat(answer.toFixed(10));//to hide the 0 at the end, added parsefloat
}
function minus(firstNum,nextNum){
    answer = firstNum - nextNum;
    answer = parseFloat(answer.toFixed(10));//to hide the 0 at the end, added parsefloat
}
function multiply(firstNum,nextNum){
    answer = firstNum * nextNum;
    answer = parseFloat(answer.toFixed(10));//to hide the 0 at the end, added parsefloat
}
function divide(firstNum,nextNum){
    if(nextNum === 0){
        answerField.textContent = "Error";
        return;
    }
    answer = firstNum / nextNum;
    answer = parseFloat(answer.toFixed(10));//to hide the 0 at the end, added parsefloat
}

//              Display and Operation
function displayNumber() {
    answerField.textContent = answer;
}
function displayValues(i) {
    answerField.textContent = parseFloat(arrNum[i]);
}
function operate(operation, firstNum, secondNum){
    operation(firstNum,secondNum);
}


const numberButtons = document.querySelectorAll('.number');//try to convert in array list
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const signButton = document.getElementById('sign');
const decimalButton = document.getElementById('.');
const equalButton = document.getElementById('=');

i = 0;//holder for arrays
dec = false;//holder for decimal
//              Event Listeners for Buttons
numberButtons.forEach(button=>{
    button.addEventListener('click',() => {
        
        if(arrNum[i] !== undefined ){
            arrNum[i] += button.id;
        }else{
            arrNum[i] = button.id;
            
        }
        displayValues(i);
        console.log("\n" + arrNum[i]);
        console.log("Answer: ", answer);
        console.log("arrNum[0]: ", arrNum[0]);
        console.log("arrNum[1]: ", arrNum[1]);
    });
});

operatorButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        i = 1;  
        
        if(arrNum[0]=== undefined){//if the user didnt type any number first, automatically 0 will be the value

            arrNum[0] = 0;
            console.log("Answer: ", answer);
            console.log("arrNum[0]: ", arrNum[0]);
            console.log("arrNum[1]: ", arrNum[1]);
        }
        if(arrNum[1] !== undefined && arrNum[1] !== ""){
            //inorder for these to be converted to float every clicks; 
            //having these, arryNum[1] will always be converted to float and answer wont result to NaN
            arrNum[0] = parseFloat(arrNum[0]);
            arrNum[1] = parseFloat(arrNum[1]);
            if(operator == "+"){
                operate(add,arrNum[0],arrNum[1]);
                
            }else if(operator == "-"){
                operate(minus,arrNum[0],arrNum[1]);
                
            }else if(operator == "*"){
                operate(multiply,arrNum[0],arrNum[1]);
        
            }else if(operator == "/"){
                operate(divide,arrNum[0],arrNum[1]);
            }
            console.log("Answer: ", answer);
            arrNum[0] = answer;
            arrNum[1] = 0;
            console.log("arrNum[0]: ", arrNum[0]);
            console.log("arrNum[1]: ", arrNum[1]);
            displayValues(0);
        }else{
           
        }
        operator = button.id;
        dec = false;
    });
});
decimalButton.addEventListener('click', button => {
    if(!dec){
        console.log(button.id)
        if(arrNum[i] !== undefined){
            arrNum[i] += ".";
        }else {
            arrNum[i] = "0.";
        }
        dec = true;
    }
    console.log("Answer: ", answer);
    console.log("arrNum[0]: ", arrNum[0]);
    console.log("arrNum[1]: ", arrNum[1]);
    displayValues(i);
})
equalButton.addEventListener('click', () => {
    i = 0;
    displayValues(i);
    console.log("Answer: ", answer);
    console.log("arrNum[0]: ", arrNum[0]);
    console.log("arrNum[1]: ", arrNum[1]);
});

backspaceButton.addEventListener('click', () => {
    //if arr num is undefined chuchuness
    arrNum[i] = arrNum[i].slice(0,(arrNum[i].length -1));
    if(arrNum[i].slice(arrNum[i].length-1) === "."){
        dec = false;
    }
    console.log("Answer: ", answer);
    console.log("arrNum[0]: ", arrNum[0]);
    console.log("arrNum[1]: ", arrNum[1]);
    
    displayValues(i);
});
signButton.addEventListener('click', ()=> {
    if(arrNum[0]=== undefined){//if the user didnt type any number first, automatically 0 will be the value
        arrNum[0] = 0;
        console.log("Answer: ", answer);
        console.log("arrNum[0]: ", arrNum[0]);
        console.log("arrNum[1]: ", arrNum[1]);
    }
    if(arrNum[1] === 0){//if second container hasnt been used yet, use arr0 or the answer container 
        i = 0;
    }
    arrNum[i] = parseFloat(arrNum[i]) * -1;
    displayValues(i);
    
    console.log("Answer: ", answer);
    console.log("arrNum[0]: ", arrNum[0]);
    console.log("arrNum[1]: ", arrNum[1]);
});
clearButton.addEventListener('click', ()=>{
    i = 0;
    arrNum[0] = undefined;
    arrNum[1] = undefined;
    answer = 0;
    operator = "";
    dec = false;
    answerField.textContent = "0";
    console.log("Answer: ", answer);
    console.log("arrNum[0]: ", arrNum[0]);
    console.log("arrNum[1]: ", arrNum[1]);
});

