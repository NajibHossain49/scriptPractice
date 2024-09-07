// Get the current date and time
// let currentDate = new Date();
// console.log(currentDate);  // Outputs the full current date and time


// // Common Date and Time Methods:

// let year = currentDate.getFullYear();
// console.log(year);  // Outputs the year, e.g., 2024


// // Get the current month:

// let month = currentDate.getMonth();  // Note: January is 0, December is 11
// console.log(month + 1);  // Add 1 to get the correct month number (1-12)


// // Get the current day of the month:
// let day = currentDate.getDate();
// console.log(day);  // Outputs the day of the month (1-31)

// // Get the current hours, minutes, and seconds:

// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();
// console.log(hours + ':' + minutes + ':' + seconds);  // Outputs the time, e.g., 15:30:45


// // Get the day of the week:
// let dayOfWeek = currentDate.getDay();  // 0 = Sunday, 6 = Saturday
// console.log(dayOfWeek);

// _____________________________________________

let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;  // Months are zero-based
let year = currentDate.getFullYear();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`Today is ${date}/${month}/${year} and the time is ${hours}:${minutes}:${seconds}`);

