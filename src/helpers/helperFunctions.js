// helperFunctions.js
export function generateTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}
export function formatPrice(price) {
    return `€${price},-`;
}
export function formatScreenSizes(sizes) {
    return sizes
        .map(size => `${size} inch (${Math.round(size * 2.54)} cm)`)
        .join(' | ');
}
