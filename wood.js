// Use add and multiplication to calculate wood requirements


function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    let perWoodChair = 3;
    let perWoodTable = 10;
    let perWoodBed = 50;

    let chairQuantityWood = chairQuantity * perWoodChair
    let tableQuantityWood = tableQuantity * perWoodTable
    let bedQuantityWood = bedQuantity * perWoodBed

    let totalWoodQuantity = chairQuantityWood + tableQuantityWood + bedQuantityWood
    return totalWoodQuantity
}

const wood = woodQuantity(30, 0, 1)

console.log("Wood Need", wood)