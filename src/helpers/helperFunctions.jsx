// helperFunctions.jsx
import inventory, {bestSellingTv} from "../constants/inventory.js";
import React from "react";

export function generateTvName(tv) {
    //return `${tv.brand} ${tv.type} - ${tv.name}`;
    return (tv.brand + " " + tv.type + " " + tv.name);
}
export function formatPrice(tv) {
    //return `€${tv.price},-`;
    return (tv.price);
}
export function formatScreenSizes(tv) {
    return tv.availableSizes
        .map(size => `${size} inch (${Math.round(size * 2.54)} cm)`)
        .join(' | ');
//    return (tv.map(tvtje => {return (" " + tvtje.availableSizes + " inch" + (Math.round(tvtje.availableSizes * 2.54) + " cm";}
}
    export function tvList(inventory) {
    // eslint-disable-next-line react/jsx-key
    const allTvBrands = inventory.map(tv => <li>{tv.brand}</li>);
    return <ul>{allTvBrands}</ul>;

}

export function brandTypeName(inventory) {
    // eslint-disable-next-line react/jsx-key
    const allTv = inventory.map(tv => <li>
    <h1>{generateTvName(tv)}</h1>
    <p>{formatPrice(tv)}</p>
    <p>{formatScreenSizes(tv)}</p>
        <p>{options(tv)}</p>
    <img src={tv.sourceImg} alt={tv.name}/>

    </li>)

    return <ul>{allTv}</ul>;
    }

    export function options(inventory){
        // eslint-disable-next-line react/jsx-key
    const optionsTv = inventory.map(tv => tv.options.map(name => <li key={tv.type}>{name.name}</li>))
    return <ul>{optionsTv}</ul>;
    }


