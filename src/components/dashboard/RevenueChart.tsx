import React from 'react';
import { ChevronDown } from 'lucide-react';
import './RevenueChart.css';

const RevenueChart: React.FC = () => {
  const data = [
    { day: 'M', height: '40%' },
    { day: 'T', height: '60%' },
    { day: 'W', height: '50%' },
    { day: 'T', height: '80%' },
    { day: 'F', height: '100%', active: true },
    { day: 'S', height: '40%' },
    { day: 'S', height: '30%' },
  ];

  return (
    <div className="revenue-chart-card">
      <div className="chart-header">
        <h4>Revenue Trends</h4>
        <div className="chart-filter">
          <span>Weekly</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="chart-container">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-wrapper">
            <div 
              className={`chart-bar ${item.active ? 'active' : ''}`} 
              style={{ height: item.height }}
            ></div>
            <span className="chart-day">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;
