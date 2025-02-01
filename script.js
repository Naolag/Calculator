const display=document.querySelector("#display")
display.textContent=" ";
const nine=document.querySelector("#nine");
const eight=document.querySelector("#eight");
const seven=document.querySelector("#seven");
const six=document.querySelector("#six");
const five=document.querySelector("#five");
const four=document.querySelector("#four");
const three=document.querySelector("#three");
const two=document.querySelector("#two");
const one=document.querySelector("#one");
const zero=document.querySelector("#zero");
const point=document.querySelector("#point");
function clickNumber() {
    let clickedNumber;
    const buttons = [nine, eight, seven, six, five, four, three, two, one, zero, point];
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            clickedNumber = button.textContent;
            display.textContent +=clickedNumber;
        })
    });
    return clickedNumber;
}

const Backspace=document.querySelector("#Backspace");
const clear=document.querySelector("#clear");
const cancel=document.querySelector("#cancel");
const devide=document.querySelector("#devide");
const multiply=document.querySelector("#multiply");
const substruct=document.querySelector("#substruct");
const sum=document.querySelector("#sum");
function operation() {
    let clickedOperator;
    const buttons = [devide, multiply, substruct, sum];

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            clickedOperator = button.id;
            display.textContent +=button.textContent;
        });
    });
     return clickedOperator;
};
const equals=document.querySelector("#equal");
function divider(a,b){
    return a/b;
}
function multiplier(a,b){
    return a*b;
}
function subtructor(a,b){
    return a-b;
}
function adder(a,b){
    return a+b;
}
function operate(firsnumber,operator,secondNumber){

    let solution;
    switch(clickedOperator) {
        case "devide": solution=divider(firsnumber,secondNumber); break;
        case "multiply": solution=multiplier(firsnumber,secondNumber); break;
        case "substruct": solution=subtructor(firsnumber,secondNumber); break;
        case "sum": solution=adder(firsnumber,secondNumber); break;
    }

}   
clickNumber();
operation();
/*
if(display.textContent==""){
    while(true){
    let firsnumber=0;
    let operator;
    let secondNumber=0;
        let number=0;
        number=clickNumber();
        operator=operation();
        if(operator==null || (operator=="substruct" && firsnumber==0))
            firsnumber= 10*firsnumber + number;
        else 
           secondNumber= 10*secondNumber +number;
       if( equals.addEventListener("click",()=>{
            display.textContent=operate(firsnumber,operator,secondNumber);
        }))
          break;
    }
}  
clear.addEventListener("click",display.textContent="");

*/