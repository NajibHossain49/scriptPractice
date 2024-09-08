function layeredDiscountTotal(quantity) {
    let first100Price = 100;  // Price for first 100 items
    let second100Price = 90;  // Price for next 101-200 items
    let above200Price = 70;   // Price for above 200 items

    if (quantity <= 100) {
        // No discount for the first 100 items
        let total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        // For quantities between 101 and 200
        let first100Total = 100 * first100Price; // Price for first 100
        let remainingQuantity = quantity - 100; // Quantity between 101-200
        let remainingTotal = remainingQuantity * second100Price; // Discounted price for remaining quantity
        let total = first100Total + remainingTotal;
        return total;
    }
    else {
        // For quantities above 200
        let first100Total = 100 * first100Price; // Price for first 100
        let second100Total = 100 * second100Price; // Price for next 100
        let remainingQuantity = quantity - 200; // Quantity above 200
        let remainingTotal = remainingQuantity * above200Price; // Discounted price for quantity above 200
        let total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

// Example usage:
let quantity = 350;
let totalCost = layeredDiscountTotal(quantity);
console.log(`Total cost for ${quantity} items: $${totalCost}`);
