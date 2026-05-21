import React from 'react';
import styles from './StatusBadge.module.css';

const StatusBadge = ({ type, count }) => {
  const label = type.toUpperCase();
  const dotClass = styles[`dot${label.charAt(0) + label.slice(1).toLowerCase()}`];
  
  return (
    <div className={styles.badgeContainer}>
      <span className={`${styles.dot} ${dotClass}`}></span>
      <span className={styles.label}>{label}</span>
      {count !== undefined && <span className={styles.count}>{count}</span>}
    </div>
  );
};

export default StatusBadge;
