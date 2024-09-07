// Find the cheapest phone from an array of phone objects

const phones = [
    {
        name: 'Samsung S5',  // Property name with value 'Samsung S5'
        price: 45000,        // Property price with value 45000
        camera: 10,          // Property camera with value 10
        storage: 32          // Property storage with value 32
    },
    {
        name: 'Walton',
        price: 15000,
        camera: 8,
        storage: 8
    },
    {
        name: 'Xiaomi M3',
        price: 12000,
        camera: 8,
        storage: 8
    }
];


// Function to find the cheapest phone
function cheapestPhone(Phone) {
    let min = Phone[0];
    for (let Lowbudget of Phone) {
        if (Lowbudget.price < min.price) {
            minPrice = Lowbudget;
        }
    }
    return minPrice;
}

const cheapestPhones = cheapestPhone(phones);
console.log(cheapestPhones);


// Find the Most Expensive Phone
const Maxphones = [
    {
        name: 'Samsung S5',
        price: 45000,
        camera: 10,
        storage: 32
    },
    {
        name: 'Walton',
        price: 15000,
        camera: 8,
        storage: 8
    },
    {
        name: 'Xiaomi M3',
        price: 12000,
        camera: 8,
        storage: 8
    }
];

// Function to find the most expensive phone (max price)
function mostExpensivePhone(Phone) {
    let max = Phone[0]; // Initialize max with the first phone
    for (let currentPhone of Phone) {
        if (currentPhone.price > max.price) {
            max = currentPhone; // Update max if current phone has a higher price
        }
    }
    return max; // Return the phone with the highest price
}

const mostExpensive = mostExpensivePhone(Maxphones);
console.log(mostExpensive);
