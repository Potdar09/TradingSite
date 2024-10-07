"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from './StockPage.module.css';

const StockPage = () => {
  const [view, setView] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const stocksPerPage = 5; // Change this to display more or fewer stocks per page

  const allStocks = [
    { name: "Apple", symbol: "AAPL", price: 180.34, change: "+1.12%", volume: "75M", avgVolume: "70M", marketCap: "2.4T", peRatio: "30", high52wk: "182", low52wk: "120" },
    { name: "Amazon", symbol: "AMZN", price: 130.11, change: "-0.24%", volume: "55M", avgVolume: "50M", marketCap: "1.3T", peRatio: "40", high52wk: "150", low52wk: "100" },
    { name: "Tesla", symbol: "TSLA", price: 250.34, change: "+3.45%", volume: "90M", avgVolume: "80M", marketCap: "800B", peRatio: "75", high52wk: "300", low52wk: "200" },
    { name: "Nvidia", symbol: "NVDA", price: 420.12, change: "+4.12%", volume: "100M", avgVolume: "95M", marketCap: "1.2T", peRatio: "60", high52wk: "500", low52wk: "350" },
    // Add more stocks as needed
  ];

  const trendingStocks = [
    { name: "Meta", symbol: "META", price: 300.12, change: "+2.45%", volume: "80M", avgVolume: "75M", marketCap: "900B", peRatio: "25", high52wk: "350", low52wk: "250" },
    { name: "Microsoft", symbol: "MSFT", price: 320.44, change: "+1.12%", volume: "65M", avgVolume: "60M", marketCap: "2.2T", peRatio: "35", high52wk: "350", low52wk: "280" },
    // Add more trending stocks
  ];

  const stocksToDisplay = view === "all" ? allStocks : trendingStocks;
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocksToDisplay.slice(indexOfFirstStock, indexOfLastStock);

  const handleStockClick = (symbol) => {
    // Redirect to a detailed stock page (dynamic route can be based on the stock symbol)
    // Uncomment the below line when `router` is imported
    // router.push(`/stocks/${symbol}`);
  };

  const totalPages = Math.ceil(stocksToDisplay.length / stocksPerPage);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1 className={styles.title}>Stocks</h1>
      </div>

      {/* Toggle between All and Trending */}
      <div className={styles.toggleButtons}>
        <button
          className={`${styles.button} ${
            view === "all" ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => {
            setView("all");
            setCurrentPage(1); // Reset to first page
          }}
        >
          All Stocks
        </button>
        <button
          className={`${styles.button} ${
            view === "trending" ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => {
            setView("trending");
            setCurrentPage(1); // Reset to first page
          }}
        >
          Trending Stocks
        </button>
      </div>

      {/* Stock Table */}
      <div className={styles.stockTableContainer}>
        <table className={styles.stockTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change</th>
              <th>Volume</th>
              <th>Avg Volume</th>
              <th>Market Cap</th>
              <th>P/E Ratio</th>
              <th>52-Week High</th>
              <th>52-Week Low</th>
              <th></th> {/* For the dropdown menu */}
            </tr>
          </thead>
          <tbody>
            {currentStocks.map((stock, index) => (
              <tr
                key={index}
                onClick={() => handleStockClick(stock.symbol)}
                className={styles.stockRow} 
              >
                <td>{stock.name}</td>
                <td>{stock.symbol}</td>
                <td>{stock.price}</td>
                <td
                  style={{
                    color: stock.change.startsWith("-") ? "#F63C6B" : "#0FEDBE",
                  }}
                >
                  {stock.change}
                </td>
                <td>{stock.volume}</td>
                <td>{stock.avgVolume}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.peRatio}</td>
                <td>{stock.high52wk}</td>
                <td>{stock.low52wk}</td>
                <td className={styles.menuContainer}>
                  <div className={styles.threeDots}>&#8226;&#8226;&#8226;</div>
                  <div className={styles.dropdownMenu}>
                    <button>Technical Analysis</button>
                    <button>Fundamental Analysis</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePageButton : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockPage;
