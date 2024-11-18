export function calculateTotalSold(inventory) {
    let totalSold = 0;
    for(let i = 0; i < inventory.length; i++){
        const tvSold = inventory[i];
        totalSold += tvSold.sold;
    }
    return totalSold;

}
