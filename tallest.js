// Who is the tallest? Find the max number in an array

const heights = [65, 66, 68, 72, 78, 62, 60, 65, 66]

function getMax(numbers) {
    let max = numbers[0]
    for (const num of numbers) {
        if (num > max) {
            max = num
        }
    }
    return max
}

const max = getMax(heights)
console.log("max value is ", max)


// Who is the smaller? Find the max number in an array
// This is the same as the previous one, just with a different name
const heights2 = [65, 66, 68, 72, 78, 62, 60, 65, 66]

function getMin(numbers) {
    let min = numbers[0]  // Initialize min with the first element
    for (const num of numbers) {
        if (num < min) {  // Check if the current number is smaller than min
            min = num
        }
    }
    return min
}

const min = getMin(heights)
console.log("min value is ", min)
