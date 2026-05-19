import React from 'react';
import { formatCurrency } from '../utils/formatters';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #ddd', background: '#fff', borderRadius: '6px', marginBottom: '10px' }}>
      <img src={item.image || '/images/gravel.jpg'} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
      
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>{item.name}</h4>
        <p style={{ margin: 0, color: '#e67e22', fontWeight: 'bold' }}>{formatCurrency(item.price)} / በሜትር ኩብ</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
          disabled={item.quantity <= 1}
          style={{ padding: '5px 10px', cursor: 'pointer', background: '#ecf0f1', border: '1px solid #bdc3c7' }}
        >
          -
        </button>
        <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
          style={{ padding: '5px 10px', cursor: 'pointer', background: '#ecf0f1', border: '1px solid #bdc3c7' }}
        >
          +
        </button>
      </div>

      <div style={{ marginLeft: '20px', textAlign: 'right' }}>
        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{formatCurrency(item.price * item.quantity)}</p>
        <button 
          onClick={() => removeFromCart(item.id)} 
          style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', fontSize: '14px' }}
        >
          አስወግድ
        </button>
      </div>
    </div>
  );
};

export default CartItem;