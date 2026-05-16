import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=GravelGo'; }}
        />
      </Link>
      
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-lg text-gray-800 mt-2 hover:text-amber-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-4">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xl font-extrabold text-gray-900">{product.price.toLocaleString()} ብር</span>
            <span className="text-xs text-gray-400">/ {product.unit}</span>
          </div>
          
          <button 
            onClick={() => addToCart(product, 1)}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            🛒 ወደ ካርት ጨምር
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;