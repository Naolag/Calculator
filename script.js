const display = document.querySelector("#display");
display.textContent = " ";

const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");

let firstNumber = 0;
let operator = null;
let secondNumber = 0;

function clickNumber() {
    let clickedNumber;
    const buttons = [nine, eight, seven, six, five, four, three, two, one, zero, point];
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            clickedNumber = button.textContent;
            display.value += clickedNumber; 
            if (operator == null) {
                firstNumber = 10 * firstNumber + parseInt(clickedNumber);
                
            } else {
                secondNumber = 10 * secondNumber + parseInt(clickedNumber);
            }
        });
    });
}
const sighnChange=document.querySelector("sighn");
const clear = document.querySelector("#clear");
const cancel = document.querySelector("#cancel");
const divide = document.querySelector("#devide");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#substruct");
const sum = document.querySelector("#sum");

function operation() {
    const buttons = [divide, multiply, subtract, sum];

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if(operator == null) {
                operator = button.id;
                display.value += button.textContent;
            } else {
                const solution= operate(firstNumber, operator, secondNumber);
                display.value = solution;
                firstNumber=solution;
                secondNumber = 0;
                operator = button.id;
                display.value +=button.textContent;
            }
           
        });
    });
}

const equals = document.querySelector("#equal");

function divider(a, b) {
    return a / b;
}

function multiplier(a, b) {
    return a * b;
}

function subtractor(a, b) {
    return a - b;
}

function adder(a, b) {
    return a + b;
}

function operate(firstNumber, operator, secondNumber) {
    let answer;

    switch (operator) {
        case "devide":
            answer = divider(firstNumber, secondNumber);
            break;
        case "multiply":
            answer = multiplier(firstNumber, secondNumber);
            break;
        case "substruct":
            answer = subtractor(firstNumber, secondNumber);
            break;
        case "sum":
            answer = adder(firstNumber, secondNumber);
            break;
    }
    return answer;
}

clickNumber();
operation();

equals.addEventListener("click", () => {
    display.value = operate(firstNumber, operator, secondNumber);
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
});

clear.addEventListener("click",()=>{
    display.value=" ";
    firstNumber=0;
    secondNumber=0;
    operator=null;
})
cancel.addEventListener("click",()=>{
    if(operator==null)
        firstNumber=parseInt(firstNumber/10);
    else if(secondNumber=0)
        operator=null;
    else if(operator!=null)
        secondNumber=parseInt(secondNumber/10);
    display.value=display.value.slice(0,-1);
})
