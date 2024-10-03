import React from 'react';
import styles from './LoserBox.module.css';

const LoserBox = ({ title, content, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default LoserBox;
