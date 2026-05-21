import React from 'react';
import { 
  LayoutDashboard, 
  ChefHat, 
  BarChart3, 
  HelpCircle, 
  LogOut, 
  Plus 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>Kitchen Admin</h1>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-item">
          <ChefHat size={20} />
          <span>Live Orders</span>
        </a>
        <a href="#" className="nav-item">
          <BarChart3 size={20} />
          <span>Revenue Stats</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <button className="btn-new-order">
          <Plus size={20} />
          <span>New Custom Order</span>
        </button>
        
        <div className="footer-links">
          <a href="#" className="nav-item">
            <HelpCircle size={20} />
            <span>Support</span>
          </a>
          <a href="#" className="nav-item">
            <LogOut size={20} />
            <span>Sign Out</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
