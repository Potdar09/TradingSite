"use client";

import React, { useState, useEffect } from 'react';
import styles from './GainerBox.module.css';

const StockBox = () => {
  const [stocks, setStocks] = useState([]);

  // We have to Fetch stock data from API endpoint here
  useEffect(() => {
    const fetchStockData = async () => {
      const stockData = [
        {
          name: 'AAPL',
          fullName: 'Apple Inc.',
          price: '150.25',
          change: '+1.25',
          changePercent: '+0.84%',
          peRatio: '28.34',
          dayChart: 'path_to_chart_image_1'
        },
        {
          name: 'GOOGL',
          fullName: 'Alphabet Inc.',
          price: '2734.79',
          change: '-12.56',
          changePercent: '-0.45%',
          peRatio: '35.12',
          dayChart: 'path_to_chart_image_2'
        },
        {
          name: 'TSLA',
          fullName: 'Tesla Inc.',
          price: '680.99',
          change: '-5.34',
          changePercent: '-0.78%',
          peRatio: '54.67',
          dayChart: 'path_to_chart_image_3'
        },
        {
          name: 'AMZN',
          fullName: 'Amazon.com Inc.',
          price: '3321.12',
          change: '+20.12',
          changePercent: '+0.61%',
          peRatio: '61.78',
          dayChart: 'path_to_chart_image_4'
        }
      ];
      setStocks(stockData);
    };

    fetchStockData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="text-3xl m-5 font-bold">Top Gainers</h1>
      <div className={styles.box}>
        <table className={styles.stockTable}>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change %</th>
              <th>P/E Ratio</th>
              <th>Day Chart</th>
            </tr>
          </thead>
          <tbody>
            {stocks.slice(0, 2).map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}<br /><span>{stock.fullName}</span></td>
                <td style={{ color: '#0FEDBE' }}>{stock.price}</td>
                <td style={{ color: stock.change.includes('-') ? '#F63C6B' : '#0FEDBE' }}>{stock.change}</td>
                <td>{stock.changePercent}</td>
                <td>{stock.peRatio}</td>
                <td>
                  <img src={stock.dayChart} alt="Graph" className={styles.chart} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl m-5 font-bold">Top Losers</h1>
      <div className={styles.box}>
        <table className={styles.stockTable}>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change %</th>
              <th>P/E Ratio</th>
              <th>Day Chart</th>
            </tr>
          </thead>
          <tbody>
            {stocks.slice(2, 4).map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}<br /><span>{stock.fullName}</span></td>
                <td style={{ color: '#F63C6B' }}>{stock.price}</td>
                <td style={{ color: stock.change.includes('-') ? '#F63C6B' : '#0FEDBE' }}>{stock.change}</td>
                <td>{stock.changePercent}</td>
                <td>{stock.peRatio}</td>
                <td>
                  <img src={stock.dayChart} alt="Graph" className={styles.chart} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockBox;
