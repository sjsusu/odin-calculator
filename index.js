let num1 = "";
let num2 = "";
let operator = null;

let buttons = document.querySelector("body");
let display = document.querySelector(".display");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "ERROR";
    }

    return x / y;
}

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            return String(add(num1, num2));
        case "-":
            return String(subtract(num1, num2));
        case "*":
            return String(multiply(num1, num2));
        case "/":
            return String(divide(num1, num2));
    }
}

function updateNumbers(number) {
    if (operator === null) {
        num1 += number;
    } else {
        num2 += number;
    }
}

function addDecimal() {
    let isNum1 = operator === null;

    if (isNum1) {
        if (!num1.includes(".")) {
            num1 += ".";
        }
    } else {
        if (!num2.includes(".")) {
            num2 += ".";
        }
    }

}

function doOperation(operation) {
    if (operator === null) {
        operator = operation;
    } else {
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = operation;
    }
}

function doEquals() {
    if (num2 === "") {
        num2 = num1;
    }

    num1 = operate(num1, num2, operator);
    num2 = "";
    operator = null;
}

function updateDisplay() {
    if (num2 === "") {
        display.textContent = num1;
    } else {
        display.textContent = num2;
    }
}

function clear() {
    num1 = "";
    num2 = "";
    operator = null;
}

buttons.addEventListener("click", (e) => {
    let button = e.target;
    console.log(button);

    switch (button.classList[0]) {
        case "number":
            updateNumbers(button.textContent);
            break;
        case "decimal":
            addDecimal();
            break;
        case "operation":
            doOperation(button.textContent);
            break;
        case "equal":
            doEquals();
            break;
        case "clear":
            clear();
    }

    updateDisplay();
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("operator: " + operator);

});