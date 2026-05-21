import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './RevenueChart.module.css';

const RevenueChart = () => {
  const data = [
    { day: 'M', height: '40%' },
    { day: 'T', height: '60%' },
    { day: 'W', height: '50%' },
    { day: 'T', height: '80%' },
    { day: 'F', height: '100%', active: true },
    { day: 'S', height: '40%' },
    { day: 'S', height: '30%' },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4>Revenue Trends</h4>
        <div className={styles.filter}>
          <span>Weekly</span>
          <ChevronDown size={18} />
        </div>
      </div>

      <div className={styles.chartContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.barWrapper}>
            <div 
              className={`${styles.bar} ${item.active ? styles.activeBar : ''}`} 
              style={{ height: item.height }}
            ></div>
            <span className={styles.dayLabel}>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;
