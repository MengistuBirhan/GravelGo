import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:scale-105 transition-transform">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-orange-600 font-bold">{product.price} ETB /{product.unit}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          እዘዝ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;