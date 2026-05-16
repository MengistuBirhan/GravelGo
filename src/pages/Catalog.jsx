import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ምርቶችን በካቴጎሪ ማጣሪያ
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-xl mx-auto py-4">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          የግንባታ እቃዎች ካታሎግ
        </h1>
        <p className="mt-2 text-gray-600">
          ለቤትዎ ወይም ለህንፃዎ ግንባታ የሚያስፈልጉ ጥራት ያላቸውን ግብአቶች እዚህ ያግኙ።
        </p>
      </div>

      {/* የካቴጎሪ ማጣሪያ ቁልፎች (Filter Buttons) */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-gray-200 pb-6">
        {['all', 'sand', 'gravel', 'cement', 'stone'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all capitalize ${
              selectedCategory === cat
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {cat === 'all' ? 'ሁሉንም አሳይ' : cat === 'sand' ? 'አሸዋ' : cat === 'gravel' ? 'ጠጠር' : cat === 'cement' ? 'ሲሚንቶ' : 'ድንጋይ'}
          </button>
        ))}
      </div>

      {/* የምርት ካርዶች ማሳያ ግሪድ (Grid Layout) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          በዚህ ምድብ ውስጥ በአሁኑ ሰዓት ምንም ምርት የለም።
        </div>
      )}
    </div>
  );
};

export default Catalog;