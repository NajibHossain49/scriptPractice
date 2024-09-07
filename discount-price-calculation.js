// (advanced) Multi-layer discount price calculation based on Qc 

/*

* Upto 100 Qc : No Discount ! 
* More than (101 to 200) Qc : 90 tk Discount !
* More than 200 Qc : 70 tk Discount ! 

*/

// Function to calculate and display the discount based on quantity
function calculateDiscount(quantity) {


    if (quantity <= 100) {
        const discount = quantity * 100;

        return discount;
    }

    else if (quantity <= 200) {
        const discount  = quantity * 90;

        return discount;
    }

    else {
        const discount  = quantity * 70;
        return discount;
    }
}

// Example usage
const quantity = 101; // Replace with your quantity value
const discount = calculateDiscount(quantity);

console.log(`Discount: ${discount} tk`);


