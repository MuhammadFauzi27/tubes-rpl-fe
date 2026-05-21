import React from 'react';
import OrderColumn from '../../components/orders/OrderColumn';
import styles from './LiveOrdersPage.module.css';

const LiveOrdersPage = () => {
  const incomingOrders = [
    {
      tableNumber: '08',
      orderId: '2451',
      time: '12:45',
      price: 'Rp 124.000',
      items: [
        { name: 'Wagyu Truffle Burger', quantity: 2, ready: false },
        { name: 'Crispy Duck Salad', quantity: 1, ready: false }
      ],
      notes: 'No onions on one burger'
    },
    {
      tableNumber: '12',
      orderId: '2453',
      time: '12:48',
      price: 'Rp 45.000',
      items: [
        { name: 'Espresso Martini', quantity: 3, ready: false }
      ]
    }
  ];

  const preparingOrders = [
    {
      tableNumber: '03',
      orderId: '2448',
      time: '12:35',
      items: [
        { name: 'Pan-Seared Salmon', quantity: 1, ready: true },
        { name: 'Wild Mushroom Risotto', quantity: 1, ready: false }
      ],
      waitTime: '12m'
    }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.board}>
        <OrderColumn 
          status="INCOMING" 
          count={4} 
          orders={incomingOrders} 
        />
        <OrderColumn 
          status="PREPARING" 
          count={2} 
          orders={preparingOrders} 
        />
      </div>
    </div>
  );
};

export default LiveOrdersPage;
