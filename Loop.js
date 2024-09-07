// let sum = 0;
// for(let i = 11 ; i<=20 ; i++){
//     sum = sum +i ; 
//     console.log(i);
    
//     console.log("Sum of Number from 11 to 20 is ", sum);

// }

/*
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNaturalNumbers(5)); // Output: 15

*/

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("Hello")); // Output: "olleh"


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // Output: true
