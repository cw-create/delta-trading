import { useState, useEffect } from 'react';
import axios from 'axios';



const BuyList = () => {
    const [ stocks, setStocks ] = useState([]);
    const API_KEY = "C3I3N8P9TBOJ1U6A";
    const symbols = ["AAPL", "MSFT"];
    //https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={API_KEY}



    const updateData = () => {
        const update = async () => {
            for (var i = 0; i < symbols.length; i++) {
                const stockData = await axios.get(
                    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbols[i]}&apikey=${API_KEY}`
                );

                axios.post(
                    'http://localhost:8000/metrics/stock/', 
                    {
                        "symbol": stockData.data["Symbol"],
                        "PEG": stockData.data["PEGRatio"]
                    }
                )
            }
            console.log('test');
            const resultData = await axios.get(
                'http://localhost:8000/metrics/stock/'
            );
            setStocks(resultData.data);
        };
        update();
    }

    useEffect(() => {
        const fetchData = async () => {
            const resultData = await axios.get(
                'http://localhost:8000/metrics/stock/'
            );
            setStocks(resultData.data);
        };
        fetchData();
    }, []);
    
    // useEffect(() => {
    //     axios
    //       .get('http://localhost:8000/metrics/stock/')
    //       .then(response => {
    //         console.log(response)
    //         setStocks(response.data)
    //       })
    //   }, [])

    return (
        <div>
            <button onClick={updateData}>Update Data</button>
            {
                stocks.map((stock, index) => {
                    return <div key={index}>{JSON.stringify(stock)}</div>;
                })
            }
        </div>
    );
}

export default BuyList;