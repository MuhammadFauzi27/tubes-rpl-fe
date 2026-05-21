import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Dashboard Overview</h2>
      </div>
      
      <div className="header-right">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search orders, tables..." />
        </div>
        
        <div className="header-actions">
          <button className="icon-btn">
            <Bell size={20} />
            <span className="notification-badge"></span>
          </button>
          <button className="icon-btn profile-btn">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
