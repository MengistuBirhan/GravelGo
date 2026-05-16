import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('chapa');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedDetails = localStorage.getItem('gravelgo_order_details');
    if (savedDetails) {
      setOrderDetails(JSON.parse(savedDetails));
    } else {
      navigate('/order'); // መረጃ ከሌለ ወደ ፎርሙ ይመልሰዋል
    }
  }, [navigate]);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // ለሙከራ ያህል ከ 2 ሰከንድ በኋላ ክፍያው እንደተሳካ ይቆጥራል
    setTimeout(() => {
      setIsProcessing(false);
      clearCart(); // ካርቱን ባዶ ያደርጋል
      localStorage.removeItem('gravelgo_order_details');
      alert(`በ ${paymentMethod === 'chapa' ? 'Chapa (Card/CBE)' : 'Telebirr'} የፈጸሙት የ ${getCartTotal().toLocaleString()} ብር ክፍያ ተሳክቷል! ትዕዛዝዎ መዝግበናል።`);
      navigate('/'); // ወደ ዋናው ገጽ ይመልሰዋል
    }, 2000);
  };

  if (!orderDetails) return <div className="text-center p-10">በመጫን ላይ...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* የማጠቃለያ ዝርዝር */}
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-3">
          <h3 className="font-bold text-lg text-gray-800 border-b border-gray-100 pb-2">📋 የማድረሻ መረጃ ማረጋገጫ</h3>
          <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">ስም፦</span> {orderDetails.fullName}</p>
          <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">ስልክ፦</span> {orderDetails.phone}</p>
          <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">ሳይት ቦታ፦</span> {orderDetails.deliveryAddress}</p>
          <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">የመኪና ዓይነት፦</span> <span className="uppercase text-xs bg-gray-100 px-2 py-0.5 rounded font-bold text-amber-700">{orderDetails.truckType}</span></p>
        </div>

        {/* የክፍያ አማራጮች ማሳያ */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg text-gray-800 border-b border-gray-100 pb-3 mb-4">💳 የክፍያ ዘዴ ይምረጡ</h3>
          
          <div className="space-y-3">
            <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'chapa' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" checked={paymentMethod === 'chapa'} onChange={() => setPaymentMethod('chapa')} className="text-amber-600 focus:ring-amber-500" />
                <div>
                  <span className="font-bold block text-sm">Chapa / የባንክ ክፍያ</span>
                  <span className="text-xs text-gray-400">CBE Birr, ቪዛ ካርድ ወይም ሌሎች ባንኮች</span>
                </div>
              </div>
              <span className="text-xl">🟢</span>
            </label>

            <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'telebirr' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" checked={paymentMethod === 'telebirr'} onChange={() => setPaymentMethod('telebirr')} className="text-amber-600 focus:ring-amber-500" />
                <div>
[5/16/2026 4:51 AM] Lazaru§ God Has Helped: <span className="font-bold block text-sm">Telebirr / ቴሌብር</span>
                  <span className="text-xs text-gray-400">ፈጣን የቴሌብር ክፍያ መፈጸሚያ</span>
                </div>
              </div>
              <span className="text-xl">🔵</span>
            </label>
          </div>
        </div>
      </div>

      {/* የመጨረሻ ሂሳብ መክፈያ ቁልፍ */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-fit space-y-4">
        <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2">ክፍያ</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>ንዑስ ድምር፦</span>
            <span>{getCartTotal().toLocaleString()} ብር</span>
          </div>
          <div className="flex justify-between">
            <span>የማጓጓዣ ዋጋ፦</span>
            <span className="text-green-600 font-medium">በነጻ (Free)</span>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
            <span>አጠቃላይ ድምር፦</span>
            <span className="text-amber-600">{getCartTotal().toLocaleString()} ብር</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full text-white font-bold py-3 rounded-xl shadow-md transition-colors text-center mt-2 ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {isProcessing ? 'ክፍያው በመካሄድ ላይ ነው...' : '🔒 አሁን ክፍያ ፈጽም'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;