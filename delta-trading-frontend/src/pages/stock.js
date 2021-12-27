import { useState, useEffect } from 'react'
import './stock.css'

const Stock = (props) => {
    let cScoreColor = "green";
    if (props.cScore < 0) {
        cScoreColor = "red";
    }

    return (
        <div className="stock-content-wrapper">
            {props.companyName}
            <br></br>
            {props.symbol}
            <br></br>
            Score: <span style={{color: cScoreColor}}>{props.cScore}</span>
        </div>
    );
}

export default Stock;
