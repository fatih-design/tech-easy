import { calculateTotalSold } from './calculateTotalSold';
import { calculateTotalInStock } from './calculateTotalInStock';

export function calculateRemainingToSell(inventory) {
    const totalSold = calculateTotalSold(inventory);
    const totalStock = calculateTotalInStock(inventory);
    return totalStock - totalSold;
}
