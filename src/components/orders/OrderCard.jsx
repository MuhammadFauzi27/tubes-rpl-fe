import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import styles from './OrderCard.module.css';

const OrderCard = ({ 
  tableNumber, 
  orderId, 
  time, 
  price, 
  items, 
  notes, 
  status,
  waitTime
}) => {
  const isPreparing = status === 'PREPARING';
  
  return (
    <div className={`${styles.card} ${isPreparing ? styles.preparingBorder : styles.incomingBorder}`}>
      <div className={styles.header}>
        <div className={styles.tableInfo}>
          <h3 className={styles.tableName}>Table {tableNumber}</h3>
          <span className={styles.orderMeta}>ORDER #{orderId} • {time}</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
        </div>
        {waitTime && (
          <div className={styles.waitTime}>
            <Clock size={14} />
            <span>{waitTime}</span>
          </div>
        )}
      </div>

      <div className={styles.itemsList}>
        {items.map((item, index) => (
          <div key={index} className={styles.itemRow}>
            <span className={styles.quantity}>{item.quantity}x</span>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.checkIcon}>
              <CheckCircle2 size={16} color={item.ready ? "#ff7a28" : "#eee"} />
            </span>
          </div>
        ))}
      </div>

      {notes && (
        <div className={styles.notes}>
          <p>Notes: <i>{notes}</i></p>
        </div>
      )}

      <div className={styles.actions}>
        {status === 'INCOMING' ? (
          <button className={styles.primaryBtn}>
            {tableNumber === '12' ? 'Start Preparation' : 'Start Cooking'}
          </button>
        ) : (
          <button className={styles.secondaryBtn}>
            <div className={styles.checkWrapper}>
              <CheckCircle2 size={16} />
              <CheckCircle2 size={16} />
            </div>
            Mark as Ready
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
