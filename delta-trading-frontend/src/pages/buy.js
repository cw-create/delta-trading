import { useState, useEffect } from 'react';


const BuyList = () => {
    const [ stockNames, setStockNames ] = useState(["hello", "hello2"]);

    return (
        <div>
            {
                stockNames.map(stock => {
                    return <div>{stock}</div>;
                })
            }
        </div>
    );
}

export default BuyList;