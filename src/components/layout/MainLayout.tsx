import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
