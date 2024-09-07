function calculateAverage(odds) {
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }

    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;

    return avg;
}

// Example usage:
const odds = [1, 3, 5, 7, 9];
const average = calculateAverage(odds);
console.log('Average:', average);
