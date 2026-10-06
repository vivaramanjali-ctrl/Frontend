const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");

let firstNumber = "";
let operator = "";
let secondNumber = "";


/* Number buttons */
numbers.forEach(function(button) {

    button.addEventListener("click", function() {

        display.textContent += button.textContent;

    });

});


/* Operator buttons */
operators.forEach(function(button) {

    button.addEventListener("click", function() {

        firstNumber = display.textContent;

        operator = button.textContent;

        display.textContent = "";

    });

});


/* Equal button */
equalButton.addEventListener("click", function() {

    secondNumber = display.textContent;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "x" || operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {
        result = num1 / num2;
    }

    else if (operator === "%") {
        result = num1 % num2;
    }

    display.textContent = result;

});


/* Clear button */
clearButton.addEventListener("click", function() {

    display.textContent = "0";

    firstNumber = "";
    operator = "";
    secondNumber = "";

});
