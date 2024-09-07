function noDuplicates(array) {
    let items = [];

    for (let item of array) {
        // Check if the item is not already in the 'items' array
        if (!items.includes(item)) {
            items.push(item);  // Only push if the item is not a duplicate
        }
    }

    return items;  // Return the array with unique items
}

const arrayWithDuplicates = [1, 2, 3, 4];
const arrayWithDuplicatesNumbers = [10, 20, 20];

// Example calls
const uniqueArray1 = noDuplicates(arrayWithDuplicates);
console.log(uniqueArray1);  

const uniqueArray2 = noDuplicates(arrayWithDuplicatesNumbers);
console.log(uniqueArray2); 
