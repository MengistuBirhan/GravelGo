import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', deliveryAddress: '', truckType: 'sinotruk', notes: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('gravelgo_order_details', JSON.stringify(formData));
    navigate('/checkout');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input name="deliveryAddress" placeholder="Address" value={formData.deliveryAddress} onChange={handleChange} required />
      <select name="truckType" value={formData.truckType} onChange={handleChange}>
        <option value="sinotruk">Sinotruk</option>
        <option value="isuzu">Isuzu</option>
      </select>
      <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
      <button type="submit">Proceed to Checkout</button>
    </form>
  );
}

export default OrderForm;