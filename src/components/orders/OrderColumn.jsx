import React from 'react';
import StatusBadge from '../common/StatusBadge';
import OrderCard from './OrderCard';
import styles from './OrderColumn.module.css';

const OrderColumn = ({ status, count, orders }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <StatusBadge type={status} count={count} />
      </div>
      <div className={styles.ordersList}>
        {orders.map((order) => (
          <OrderCard key={order.orderId} {...order} status={status} />
        ))}
      </div>
    </div>
  );
};

export default OrderColumn;
