import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  // ምርቱን በ ID መፈለግ
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">ምርቱ አልተገኘም!</h2>
        <Link to="/catalog" className="text-amber-600 hover:underline mt-4 inline-block">ወደ ካታሎግ ይመለሱ</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
    // ምርቱ እንደተጨመረ ቀጥታ ወደ ካርት ገጽ እንዲወስደው ማድረግ ትችላለህ ወይም እዚሁ እንዲቆይ
    navigate('/cart');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-4xl mx-auto mt-6">
      <Link to="/catalog" className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1 mb-6">
        ← ወደ ካታሎግ ተመለስ
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* የምርት ፎቶ */}
        <div className="rounded-xl overflow-hidden bg-gray-100 max-h-96">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/500x400?text=GravelGo'; }}
          />
        </div>

        {/* የምርት ዝርዝር መረጃ */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1 rounded">
              {product.category}
            </span>
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{product.name}</h1>
            <div className="text-2xl font-black text-amber-600">
              {product.price.toLocaleString()} ብር <span className="text-sm font-normal text-gray-500">/ {product.unit}</span>
            </div>
            <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
              {product.description}
            </p>
          </div>

          {/* ብዛት መምረጫ እና ካርት ቁልፍ */}
          <div className="mt-8 pt-4 border-t border-gray-100 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">የመጠን ብዛት ({product.unit})፦</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <button 
                  onClick={() => setQty(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 font-bold text-lg transition-colors"
                >
                  -
                </button>
                <span className="px-4 font-semibold text-gray-800 w-12 text-center">{qty}</span>
                <button 
                  onClick={() => setQty(prev => prev + 1)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 font-bold text-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
            >
              🛒 ይዘዙ (ወደ ካርት ይጨምሩ)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;