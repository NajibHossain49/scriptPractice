// Swap variable, swap without temp, destructing

/*
a = 7;
b = 9;
const temp = a;
a = b;
b = temp;

console.log(a, b);*/

a = 7;
b = 9;

[a, y] = [b, a]

console.log(a, y)