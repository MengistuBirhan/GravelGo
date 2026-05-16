import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQty, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-10">
        <span className="text-6xl">🛒</span>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">የሶፒንግ ካርትዎ ባዶ ነው!</h2>
        <p className="text-gray-500 mt-2">የግንባታ እቃዎችን ለመምረጥ ወደ ካታሎግ ገጽ ይሂዱ።</p>
        <Link to="/catalog" className="mt-6 inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-md">
          ወደ ካታሎግ ይሂዱ
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h1 className="text-2xl font-extrabold text-gray-900 mb-6">የመረጧቸው ምርቶች (Cart)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* የዕቃዎች ዝርዝር */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">{item.name}</h3>
                <p className="text-amber-600 font-extrabold text-sm mt-1">{item.price.toLocaleString()} ብር / {item.unit}</p>
              </div>

              {/* ብዛት መቆጣጠሪያ */}
              <div className="flex items-center border border-gray-300 rounded-md bg-gray-50">
                <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2 py-1 font-bold bg-gray-200 hover:bg-gray-300">-</button>
                <span className="px-3 font-semibold text-sm w-10 text-center">{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 py-1 font-bold bg-gray-200 hover:bg-gray-300">+</button>
              </div>

              {/* ማጥፊያ */}
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium p-2">
                🗑️ አስወግድ
              </button>
            </div>
          ))}
        </div>

        {/* የሂሳብ ማጠቃለያ (Summary) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit space-y-4">
          <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">የሂሳብ ማጠቃለያ</h3>
          <div className="flex justify-between text-gray-600 text-sm">
            <span>የዕቃዎች ብዛት፦</span>
            <span className="font-semibold">{cartItems.reduce((acc, item) => acc + item.qty, 0)} {cartItems[0]?.unit.split(' ').pop()}</span>
          </div>
          <div className="flex justify-between text-gray-900 font-black text-lg pt-2 border-t border-gray-100">
            <span>ጠቅላላ ዋጋ፦</span>
            <span className="text-amber-600">{getCartTotal().toLocaleString()} ብር</span>
          </div>
          
          <button 
            onClick={() => navigate('/order')}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center block mt-4"
          >
            ወደ ማዘዣ ቅጽ ቀጥል →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;