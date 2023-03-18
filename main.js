// TODO:
// decimal support
// divide by zero protection

let displayValue = "0";
let historyValue = "";
let operation = "";
let operationJustSelected = true;


function debug() {
    let debugArray = [displayValue, historyValue, operation, operationJustSelected];
    console.log(debugArray);
}

//basic calculator functionality
function operate() {

    debug();
    
    let n1 = parseInt(historyValue);
    let n2 = parseInt(displayValue);
    let solution;

    switch (operation) {
        case "+":
            solution = n1 + n2;
            break;
        case "-":
            solution = n1 - n2; 
            break;
        case "/":
            solution = n1 / n2;
            break;
        case "*":
            solution = n1 * n2;
            break;
        case "":
            document.getElementById('history').textContent = `${displayValue} = `;
            return;
    }


    document.getElementById('history').textContent = `${historyValue} ${operation}  ${displayValue} = `;
    displayValue = solution;
    document.getElementById('displayValue').textContent = displayValue;
    return solution;
}

//number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((e) => {
    e.addEventListener('click', () => {

        //this erases the first number when you start typing after hitting an operation
        if (operationJustSelected == true) {
            operationJustSelected = false;
            displayValue = "";
        }

        displayValue = displayValue + (e.id);
        document.getElementById('displayValue').textContent = displayValue;

    });
});

//operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((e) => {
    e.addEventListener('click', () => {

        operation = e.id;
        historyValue = displayValue;
        document.getElementById('history').textContent = `${displayValue} ${operation}`;
        operationJustSelected = true;
    });
});

//equals sign
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {

    console.log(operate());

});

//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    displayValue = "";
    historyValue = "";
    operation = "";
    document.getElementById('history').textContent = historyValue;
    document.getElementById('displayValue').textContent = 0;

});

//backspace button
const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', () => {



});

//backspace button
const negativeButton = document.querySelector('#negative');
negativeButton.addEventListener('click', () => {
    displayValue = parseInt(displayValue) * -1;
    document.getElementById('displayValue').textContent = displayValue;
});