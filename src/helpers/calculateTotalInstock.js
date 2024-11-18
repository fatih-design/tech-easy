export function calculateTotalInStock(inventory) {
    let totalStock = 0;
    for (let i = 0; i < inventory.length; i++) {
        const tv = inventory[i];
        totalStock += tv.originalStock;
    }
    return totalStock;
}


