import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 style={{color: 'orange'}}>GravelGo</h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">ምርቶች (Catalog)</Link></li>
        <li><Link to="/order">ማዘዣ (Order)</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;