"use client";
import React, { useState, useEffect } from 'react';
import styles from './indexcard.module.css'; // Import CSS module

const Card = ({ symbol, title }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Django backend
    fetch(`http://127.0.0.1:8000/index-data/${symbol}/`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setData(data);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [symbol]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { points, day_change, day_change_percentage, open, high, low, low_52wk } = data;

  const changeClass =
      day_change > 0 ? styles.changePositive : styles.changeNegative;
      
  const hoverClass = day_change > 0 ? styles.cardHoverPositive : styles.cardHoverNegative;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        <div className={`${styles.card} ${hoverClass}`}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.gridContainer}>
            <div className={styles.colSpan2}>
            <p className={`${styles.points} ${changeClass}`}>{points}</p>
            </div>
            <div className={styles.colSpan1}>
              <p className={changeClass}>{day_change}</p>
              <p className={changeClass}>{`${day_change_percentage}%`}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
                <p className={styles.contentText}>Open</p>
                <p className={styles.contentVal}>{open}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className={styles.contentText}>High</p>
                <p className={styles.contentVal}>{high}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className={styles.contentText}>Low</p>
                <p className={styles.contentVal}>{low}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className={styles.contentText}>52 wk low</p>
                <p className={styles.contentVal}>{low_52wk}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
