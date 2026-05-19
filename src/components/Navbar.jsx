import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = ({ user, isAuthenticated, logout }) => {
  //useCart ከሚለው ይልቅ በቀጥታ Contextውን በመጥራት አስተማማኝ እናደርገዋለን
  const cartContext = useContext(CartContext);
  const cartItems = cartContext?.cartItems || [];
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#2c3e50', color: 'white' }}>
      <Link to="/" style={{ color: '#f39c12', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>GRAVELGO</Link>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/catalog" style={{ color: 'white', textDecoration: 'none' }}>ካታሎግ</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>ፕሮፋይል</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', position: 'relative', background: '#34495e', padding: '8px 15px', borderRadius: '20px' }}>
          🛒 መያዣ <span style={{ background: '#e74c3c', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: '12px', marginLeft: '5px' }}>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;