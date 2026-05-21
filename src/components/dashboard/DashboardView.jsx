import React from 'react';
import { Banknote, ShoppingCart, Clock } from 'lucide-react';
import StatCard from './StatCard';
import OrderCard from './OrderCard';
import RevenueChart from './RevenueChart';
import styles from './DashboardView.module.css';

const DashboardView = () => {
  const orders = [
    {
      tableNumber: '04',
      orderTime: '12 mins ago',
      status: 'PREPARING',
      items: [
        { name: 'Wagyu Burger', quantity: 1, price: 'Rp98.000' },
        { name: 'Truffle Fries', quantity: 2, price: 'Rp70.000' }
      ],
      totalPrice: 'Rp168.000'
    },
    {
      tableNumber: '12',
      orderTime: '25 mins ago',
      status: 'READY',
      items: [
        { name: 'Lobster Ravioli', quantity: 3, price: 'Rp300.000' },
        { name: 'Pinot Noir', quantity: 1, price: 'Rp140.000' }
      ],
      totalPrice: 'Rp440.000',
      borderColor: '#2ecc71'
    },
    {
      tableNumber: '08',
      orderTime: '45 mins ago',
      status: 'SERVED',
      items: [
        { name: 'Margherita Pizza', quantity: 2, price: 'Rp150.000' }
      ],
      totalPrice: 'Rp150.000'
    },
    {
      tableNumber: '02',
      orderTime: '5 mins ago',
      status: 'PREPARING',
      items: [
        { name: "Chef's Special Tasting Menu (x2)", quantity: 1, price: '' }
      ],
      totalPrice: 'Rp240.000',
      borderColor: '#ff7a28'
    }
  ];

  return (
    <div className={styles.view}>
      <div className={styles.statsGrid}>
        <StatCard 
          icon={<Banknote size={24} />} 
          label="Today's Revenue" 
          value="Rp2.000.000" 
          trend={{ value: '+12.5%', type: 'positive' }}
        />
        <StatCard 
          icon={<ShoppingCart size={24} />} 
          label="Pending Orders" 
          value="12" 
          trend={{ value: 'Priority: 3', type: 'neutral' }}
        />
        <StatCard 
          icon={<Clock size={24} />} 
          label="Avg. Wait Time" 
          value="18 mins" 
          trend={{ value: '+2m', type: 'negative' }}
        />
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.liveOrdersSection}>
          <div className={styles.sectionHeader}>
            <h3>Live Orders</h3>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          <div className={styles.ordersGrid}>
            {orders.map((order, index) => (
              <OrderCard key={index} {...order} />
            ))}
          </div>
        </div>

        <div className={styles.chartsSection}>
          <RevenueChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
