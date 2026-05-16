import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderForm = () => {
  const { getCartTotal } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    deliveryAddress: '',
    truckType: 'sinotruk', // ነባሪ ምርጫ
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // የተሞላውን ዳታ ለቼክአውት ገጽ በ state አሳልፎ ይሰጣል
    localStorage.setItem('gravelgo_order_details', JSON.stringify(formData));
    navigate('/checkout');
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mt-6">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">የማዘዣ እና ማድረሻ ፎርም</h2>
      <p className="text-gray-500 text-sm mb-6">እባክዎ እቃው የሚረከቡበትን ትክክለኛ መረጃ ይሙሉ</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ሙሉ ስም</label>
          <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="እባክዎ ስምዎን ያስገቡ" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ስልክ ቁጥር</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="09xxxxxxxx" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ትክክለኛ የማድረሻ ቦታ (ሳይት)</label>
          <input required type="text" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="ምሳሌ፡ ባሕር ዳር፣ ቀበሌ 14፣ ማርያም ቤተክርስቲያን አጠገብ" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">የጭነት መኪና ምርጫ</label>
          <select name="truckType" value={formData.truckType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none">
            <option value="sinotruk">ሲኖትራክ (Sinotruk - ባለ 3 ዘንግ)</option>
            <option value="isuzu">ኢሱዙ (Isuzu FSR)</option>
            <option value="trailer">ከባድ ተሳቢ (Trailer)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ተጨማሪ ማሳሰቢያ (ካለ)</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="ለአሽከርካሪው የሚተላለፍ ልዩ መልዕክት ካለ..."></textarea>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-400 block">የእቃው ዋጋ</span>
            <span className="text-xl font-black text-amber-600">{getCartTotal().toLocaleString()} ብር</span>
          </div>
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md">
            ወደ ክፍያ ሂድ →
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;