import React from 'react';
import { calculateTotalSold } from './helpers/calculateTotalSold';
import { calculateTotalInStock } from './helpers/calculateTotalInStock';
import { calculateRemainingToSell } from './helpers/calculateRemainingToSell';
import { bestSellingTv }   from './constants/inventory.js';
import {generateTvName, formatPrice, tvList, brandTypeName, formatScreenSizes} from './helpers/helperFunctions.jsx';
import inventory from "./constants/inventory.js";


function App() {
    // Calculate values directly, without useState or useEffect
    const totalSold = calculateTotalSold(inventory);
    const totalStock = calculateTotalInStock(inventory);
    const remainingToSell = calculateRemainingToSell(inventory);

    return (
        <div>
            <h1>Tech It Easy Dashboard</h1>

            {/* Verkochte tv's in het groen */}
            <p style={{color: 'green'}}>Totaal verkochte tv's: {totalSold}</p>

            {/* Aantal ingekocht tv's in het blauw */}
            <p style={{color: 'blue'}}>Totaal ingekocht tv's: {totalStock}</p>

            {/* Tv's die nog verkocht moeten worden in het rood */}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p style={{color: 'red'}}>Tv's die nog verkocht moeten worden: {remainingToSell}</p>

            <h1>{generateTvName(bestSellingTv)}</h1>
            <p>{formatPrice(bestSellingTv)}</p>
            <p>{formatScreenSizes(bestSellingTv)}</p>
            <img src={bestSellingTv.sourceImg} alt={bestSellingTv.name}/>
<h2>De merken van onze Tv</h2>
            <div>{tvList(inventory)}</div>
            <div>{brandTypeName(inventory)}</div>

        </div>
    );
}

export default App;
