import React from 'react';
import styles from './indexcard.module.css'; // Import CSS module

const Card = ({ title, points, dayChange, dayChangePerc, open, high, low, low52wk }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          {/* Grid layout for col-span behavior */}
          <div className={styles.gridContainer}>
            <div className={styles.colSpan2}>
              <p className={styles.points}>{points}</p>
            </div>
            <div className={styles.colSpan1}>
              <p className={styles.pointsChange}>{dayChange}</p>
              <p className={styles.pointsChange}>{`${dayChangePerc}%`}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
                <p className={styles.contentText}>open</p>
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
                <p className={styles.contentVal}>{low52wk}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
