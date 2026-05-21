import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ icon, label, value, trend }) => {
  const trendClass = trend 
    ? styles[`trend${trend.type.charAt(0).toUpperCase() + trend.type.slice(1)}`] 
    : '';

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        {trend && (
          <span className={`${styles.trend} ${trendClass}`}>
            {trend.value}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.label}>{label}</p>
        <h3 className={styles.value}>{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
