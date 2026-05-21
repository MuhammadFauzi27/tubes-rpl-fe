import React from 'react';
import styles from './OrderCard.module.css';

const OrderCard = ({ 
  tableNumber, 
  orderTime, 
  status, 
  items, 
  totalPrice,
  borderColor 
}) => {
  const statusKey = status.toLowerCase();
  
  const getActionLabel = (status) => {
    switch (status) {
      case 'PREPARING': return 'Manage';
      case 'READY': return 'Serve Now';
      case 'SERVED': return 'Print Receipt';
      default: return 'View';
    }
  };

  const actionClass = styles[`action${status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}`];

  return (
    <div 
      className={styles.card} 
      style={{ borderLeftColor: borderColor || 'transparent' }}
    >
      <div className={styles.header}>
        <div className={styles.tableInfo}>
          <h4>Table {tableNumber}</h4>
          <span className={styles.orderTime}>Ordered {orderTime}</span>
        </div>
        <span className={`${styles.statusBadge} ${styles[statusKey]}`}>
          {status}
        </span>
      </div>

      <div className={styles.itemsList}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.itemName}>
              {item.quantity}x {item.name}
            </span>
            <span className={styles.itemPrice}>{item.price}</span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.total}>
          <span className={styles.totalAmount}>{totalPrice}</span>
        </div>
        <button className={`${styles.actionBtn} ${actionClass}`}>
          {getActionLabel(status)}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
