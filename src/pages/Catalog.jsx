import React from 'react';

const products = [
  { id: 1, name: "ዜሮ ጠጠር", price: "1200", img: "/images/gravel.jpg" },
  { id: 2, name: "አሸዋ", price: "900", img: "/images/sand.jpg" },
  { id: 3, name: "ድንጋይ", price: "1500", img: "/images/stone.jpg" }
];

const Catalog = () => {
  return (
    <div style={{padding: '20px'}}>
      <h1 style={{textAlign: 'center'}}>የሽያጭ ምርቶች</h1>
      <div className="product-grid">
        {products.map(item => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>ዋጋ፡ {item.price} ብር በ ሜትር ኩብ</p>
            <button style={{background: 'orange', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%'}}>
              አሁኑኑ እዘዝ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;