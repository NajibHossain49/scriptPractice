// 23-8 Handle unexpected function input parameter error

function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Both inputs must be numbers.";

    }
    let multiply = Number(a) * Number(b);
    return multiply;
}
// _____________________

function multiply(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        let full = string1 + " " + string2
        return full;

    }

}

console.log(multiply("5", "seven"));  // Output: 35
