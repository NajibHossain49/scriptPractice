// Calculate the total cost of the products in a shopping cart

// Calculate the total cost of the products in a shopping cart

const cart = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 20, quantity: 1 },
    { name: 'Product 3', price: 30, quantity: 3 },
    { name: 'Product 4', price: 40, quantity: 1 },
    { name: 'Product 5', price: 50, quantity: 2 },
    { name: 'Product 6', price: 60, quantity: 1 },
    { name: 'Product 7', price: 70, quantity: 4 },
    { name: 'Product 8', price: 80, quantity: 2 },
    { name: 'Product 9', price: 90, quantity: 1 },
    { name: 'Product 10', price: 100, quantity: 1 }
];


function getShoppingTotal(products) {
    let totalPrice = 0; // Initialize totalPrice here
    for (let item of products) {
        totalPrice = totalPrice + item.price * item.quantity; // Multiply price by quantity and add to totalPrice
    }
    return totalPrice;
}

console.log("Total price:", getShoppingTotal(cart));
