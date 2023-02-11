// TODO:
// clear better
// decimal support
// divide by zero protection
// disallow strings of numbers to be added (calculate answer after each operation press)

let displayValue = "";
let currentOperator = "";
let numberBeforeOperator = 0;
let numberAfterOperator;

//basic calculator functionality
function operate(operation, n1, n2) {
    switch (operation) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2; 
        case "/":
            return n1 / n2;
        case "*":
            return n1 * n2;
    }
}

//number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((e) => {
    e.addEventListener('click', () => {
        displayValue = displayValue + (e.id);
        document.getElementById('displayValue').textContent = displayValue;
    });
});

//operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((e) => {
    e.addEventListener('click', () => {
        // if (e.id === currentOperator) {
        //     displayValue = "";
        //     return;
        // }
        
        if (e.id === '=') {
            numberAfterOperator = parseInt(displayValue);
            displayValue = operate(currentOperator,numberBeforeOperator,numberAfterOperator);
            document.getElementById('history').textContent = `${numberBeforeOperator} ${currentOperator} ${numberAfterOperator} = `;
            document.getElementById('displayValue').textContent = displayValue;
            return;
        }

        currentOperator = (e.id);
        numberBeforeOperator = parseInt(displayValue);
        document.getElementById('history').textContent = `${numberBeforeOperator} ${currentOperator}`;
        displayValue = "";
    });
});

//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    displayValue = "";
    numberBeforeOperator = 0;
    document.getElementById('displayValue').textContent = "0";
});

//backspace button
const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0,displayValue.length - 1);
    document.getElementById('displayValue').textContent = displayValue;
});