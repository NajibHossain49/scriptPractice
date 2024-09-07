// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// let length = text.length;
// console.log(index);
// console.log(length);

// *Reverse a String Short-Cut version*

// let name = "NAJIBHOSSAIN";
// let reversedName = name.split('').reverse().join('');

// console.log(reversedName); // "NIASSOHBIJAN"


// let names = "NAJIBHOSSAIN";
// let reversedName = "";

// for (let i = 0 ; i< names.length; i++ ) {
//     const letter = names [i];
//     reversedName = letter + reversedName;
// }

// console.log(reversedName); // "NIASSOHBIJAN"

// var num = 3;
// function calculate() {
//     console.log(num); //..1st> Undefined 
//     var num = 4;
//     function add() {
//         console.log(num);  //..2st> 4
//         num += 5;
//     }
//     add();
//     // console.log(num);//..3rd> 9
//     // console.log(num);
// }
// calculate();
// console.log(num); //..4th 3

// var a = 1;

// function outer() {
//     console.log(a);  // First output: undefined
//     var a = 2;       // `a` is now 2
//     function inner() {
//         console.log(a);  // Second output: 2
//         a = 3;           // `a` is now 3
//     }
//     inner();            // `inner` is called
//     // console.log(a);     // Third output: 3
// }

// outer();
// console.log(a);         // Fourth output: 1 (global `a`)



var value = 5;
function outerFunction() {
    console.log(value); //output : 1 undefined
    var value = 10;
    function innerFunction() {
        console.log(value); //output : 2 undefined
        var value = 20;
    }
    innerFunction();
    console.log(value);//output : 3 10
}
outerFunction();
console.log(value); //output : 4  5
