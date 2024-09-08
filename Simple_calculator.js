// 23-7 Simple calculator to call function inside a function
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divided(number1, number2) {
    return number1 / number2;
}

function calculator(a, b, operation) {
    if (operation === "add") {
        return add(a, b);
    } else if (operation === "subtract") {
        return subtract(a, b);
    } else if (operation === "multiply") {
        return multiply(a, b);
    } else if (operation === "divided") {
        return divided(a, b);
    } else {
        return "Invalid operation";
    }
}

console.log(calculator(5, 7, "multiply"));
