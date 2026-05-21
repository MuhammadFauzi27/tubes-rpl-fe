import React from 'react';
import './StatCard.css';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: {
    value: string;
    type: 'positive' | 'negative' | 'neutral';
  };
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, trend }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-icon-wrapper">
          {icon}
        </div>
        {trend && (
          <span className={`stat-trend trend-${trend.type}`}>
            {trend.value}
          </span>
        )}
      </div>
      <div className="stat-card-body">
        <p className="stat-label">{label}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
