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
                console.log({
                    'companyName': stockData.data["Name"],
                    'description': stockData.data["Description"], 
                    'industry': stockData.data["Industry"], 
                    'EBITDA': stockData.data["EBITDA"], 
                    "symbol": stockData.data["Symbol"],
                    "PEG": stockData.data["PEGRatio"],
                    'bookValue': stockData.data["BookValue"], 
                    'divPerShare': stockData.data["DividendPerShare"], 
                    'divYield': stockData.data["DividendYield"], 
                    'EPS': stockData.data["EPS"], 
                    'ROA': stockData.data["ReturnOnAssetsTTM"], 
                    'ROE': stockData.data["ReturnOnEquityTTM"], 
                    'quarterEarningsGrowth': stockData.data["QuarterlyEarningsGrowthYOY"], 
                    'quarterRevenueGrowth': stockData.data["QuarterlyRevenueGrowthYOY"], 
                    'targetPrice': stockData.data["AnalystTargetPrice"], 
                    'trailingPE': stockData.data["TrailingPE"], 
                    'forwardPE': stockData.data["ForwardPE"], 
                    'priceToSales': stockData.data["PriceToSalesRatioTTM"], 
                    'priceToBook': stockData.data["PriceToBookRatio"], 
                    'yearlyHigh': stockData.data["52WeekHigh"], 
                    'yearlyLow': stockData.data["52WeekLow"],
                    'fiftyDayMovingAvg': stockData.data["50DayMovingAverage"], 
                    'twoHundredDayMovingAvg': stockData.data["200DayMovingAverage"]
                });
                axios.post(
                    'http://localhost:8000/metrics/stock/', 
                    {
                        'companyName': stockData.data["Name"],
                        'description': stockData.data["Description"], 
                        'industry': stockData.data["Industry"], 
                        'EBITDA': stockData.data["EBITDA"], 
                        "symbol": stockData.data["Symbol"],
                        "PEG": stockData.data["PEGRatio"],
                        'bookValue': stockData.data["BookValue"], 
                        'divPerShare': stockData.data["DividendPerShare"], 
                        'divYield': stockData.data["DividendYield"], 
                        'EPS': stockData.data["EPS"], 
                        'ROA': stockData.data["ReturnOnAssetsTTM"], 
                        'ROE': stockData.data["ReturnOnEquityTTM"], 
                        'quarterEarningsGrowth': stockData.data["QuarterlyEarningsGrowthYOY"], 
                        'quarterRevenueGrowth': stockData.data["QuarterlyRevenueGrowthYOY"], 
                        'targetPrice': stockData.data["AnalystTargetPrice"], 
                        'trailingPE': stockData.data["TrailingPE"], 
                        'forwardPE': stockData.data["ForwardPE"], 
                        'priceToSales': stockData.data["PriceToSalesRatioTTM"], 
                        'priceToBook': stockData.data["PriceToBookRatio"], 
                        'yearlyHigh': stockData.data["52WeekHigh"], 
                        'yearlyLow': stockData.data["52WeekLow"],
                        'fiftyDayMovingAvg': stockData.data["50DayMovingAverage"], 
                        'twoHundredDayMovingAvg': stockData.data["200DayMovingAverage"]
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