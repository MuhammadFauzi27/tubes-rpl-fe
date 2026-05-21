import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h2>Dashboard Overview</h2>
      </div>
      
      <div className={styles.actions}>
        <div className={styles.searchContainer}>
          <Search size={20} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search orders, tables..." 
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.iconGroup}>
          <button className={styles.iconBtn}>
            <Bell size={22} />
            <span className={styles.badge}></span>
          </button>
          <button className={`${styles.iconBtn} ${styles.profileBtn}`}>
            <User size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
