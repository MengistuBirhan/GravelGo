import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#e74c3c', margin: 0 }}>404</h1>
      <h2>ይቅርታ፣ የፈለጉት ገጽ አልተገኘም!</h2>
      <p style={{ color: '#7f8c8d', marginBottom: '30px' }}>የተሳሳተ ሊንክ ተጠቅመው ሊሆን ይችላል።</p>
      <Link to="/" style={{ background: '#2c3e50', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '4px' }}>
        ወደ ዋናው ገጽ ተመለስ
      </Link>
    </div>
  );
};

export default NotFound;