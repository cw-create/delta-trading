import { useState, useEffect } from 'react'
import './stock.css'

const Stock = (props) => {
    return (
        <div className="stock-content-wrapper">
            {props.companyName}
            <br></br>
            {props.symbol}
        </div>
    );
}

export default Stock;
