import React from 'react';
import { 
  LayoutDashboard, 
  ChefHat, 
  BarChart3, 
  HelpCircle, 
  LogOut, 
  Plus 
} from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        Kitchen Admin
      </div>

      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className={`${styles.navItem} ${styles.active}`}>
          <ChefHat size={20} />
          <span>Live Orders</span>
        </a>
        <a href="#" className={styles.navItem}>
          <BarChart3 size={20} />
          <span>Revenue Stats</span>
        </a>
      </nav>

      <div className={styles.footer}>
        <button className={styles.newOrderBtn}>
          <Plus size={20} />
          <span>New Custom Order</span>
        </button>
        
        <div className={styles.footerLinks}>
          <a href="#" className={styles.navItem}>
            <HelpCircle size={20} />
            <span>Support</span>
          </a>
          <a href="#" className={styles.navItem}>
            <LogOut size={20} />
            <span>Sign Out</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
