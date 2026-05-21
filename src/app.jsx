import React from 'react';
import MainLayout from './components/layout/MainLayout';
import LiveOrdersPage from './pages/live-orders/LiveOrdersPage';

function App() {
  return (
    <MainLayout>
      <LiveOrdersPage />
    </MainLayout>
  );
}

export default App;
