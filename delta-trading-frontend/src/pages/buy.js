import { useState, useEffect } from 'react';
import axios from 'axios';
import Stock from './stock.js'
import './buy.css'
import { stocksToTrack, metrics, ERRORCONST } from '../data.js';

const BuyList = () => {
    const [ stocks, setStocks ] = useState([]);
    const API_KEY = "C3I3N8P9TBOJ1U6A";
    //https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={API_KEY}

    const updateData = () => {
        const update = async () => {
            for (var i = 0; i < stocksToTrack.length; i++) {
                const stockData = await axios.get(
                    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stocksToTrack[i]}&apikey=${API_KEY}`
                );

                for (var j = 0; j < metrics.length; j++) {
                    if (stockData.data[metrics[j]] === '-' || stockData.data[metrics[j]] === 'None') {
                        stockData.data[metrics[j]] = ERRORCONST;
                    }
                }
                console.log(
                    {
                        'companyName': stockData.data["Name"],
                        'description': stockData.data["Description"], 
                        'industry': stockData.data["Industry"], 
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
                axios.post(
                    'http://localhost:8000/metrics/stock/', 
                    {
                        'companyName': stockData.data["Name"],
                        'description': stockData.data["Description"], 
                        'industry': stockData.data["Industry"], 
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
            console.log('POST request for updating data');
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

    return (
        <div>
            <button onClick={updateData}>Update Data</button>
            <div className='stock-list-wrapper'>
                {
                    stocks.map((stock, index) => {
                        return <div className='stock-wrapper' key={index}>
                            <Stock 
                                companyName={stock["companyName"]}
                                description={stock["description"]} 
                                industry = {stock["Industry"]} 
                                symbol = {stock["symbol"]}
                                PEG = {stock["PEG"]}
                                bookValue = {stock["bookValue"]}
                                divPerShare = {stock["divPerShare"]}
                                divYield = {stock["divYield"]}
                                EPS = {stock["EPS"]}
                                ROA = {stock["ROA"]}
                                ROE = {stock["ROE"]}
                                quarterEarningsGrowth = {stock["quarterEarningsGrowth"]}
                                quarterRevenueGrowth = {stock["quarterRevenueGrowth"]}
                                targetPrice = {stock["targetPrice"]}
                                trailingPE = {stock["trailingPE"]}
                                forwardPE = {stock["forwardPE"]}
                                priceToSales = {stock["priceToSales"]}
                                priceToBook = {stock["priceToBook"]}
                                yearlyHigh = {stock["yearlyHigh"]}
                                yearlyLow = {stock["yearlyLow"]}
                                fiftyDayMovingAvg = {stock["fiftyDayMovingAvg"]}
                                twoHundredDayMovingAvg = {stock["twoHundredDayMovingAvg"]}
                            />
                        </div>;
                    })
                }
            </div>
        </div>
    );
}

export default BuyList;