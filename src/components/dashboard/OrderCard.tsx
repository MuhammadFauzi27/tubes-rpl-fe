import React from 'react';
import './OrderCard.css';

export type OrderStatus = 'PREPARING' | 'READY' | 'SERVED';

interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

interface OrderCardProps {
  tableNumber: string;
  orderTime: string;
  status: OrderStatus;
  items: OrderItem[];
  totalPrice: string;
  borderColor?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ 
  tableNumber, 
  orderTime, 
  status, 
  items, 
  totalPrice,
  borderColor 
}) => {
  const getStatusLabel = (status: OrderStatus) => {
    switch (status) {
      case 'PREPARING': return 'PREPARING';
      case 'READY': return 'READY';
      case 'SERVED': return 'SERVED';
    }
  };

  const getActionLabel = (status: OrderStatus) => {
    switch (status) {
      case 'PREPARING': return 'Manage';
      case 'READY': return 'Serve Now';
      case 'SERVED': return 'Print Receipt';
    }
  };

  return (
    <div className={`order-card status-${status.toLowerCase()}`} style={{ borderLeft: borderColor ? `4px solid ${borderColor}` : undefined }}>
      <div className="order-header">
        <div className="table-info">
          <h4>Table {tableNumber}</h4>
          <span className="order-time">Ordered {orderTime}</span>
        </div>
        <span className={`status-badge status-${status.toLowerCase()}`}>
          {getStatusLabel(status)}
        </span>
      </div>

      <div className="order-items">
        {items.map((item, index) => (
          <div key={index} className="order-item">
            <span className="item-details">
              {item.quantity}x {item.name}
            </span>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="order-footer">
        <div className="order-total">
          <span className="total-label">Total</span>
          <span className="total-amount">{totalPrice}</span>
        </div>
        <button className={`action-btn action-${status.toLowerCase()}`}>
          {getActionLabel(status)}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
