import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ user, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout) logout();
    navigate('/login');
  };

  return (
    <div className="sidebar" style={{ width: '250px', background: '#2c3e50', color: '#fff', height: '100vh', padding: '20px' }}>
      <h2>GravelGo</h2>
      <div className="user-info" style={{ margin: '20px 0', borderBottom: '1px solid #4f5d73', paddingBottom: '10px' }}>
        <p>እንኳን ደህና መጡ፣ <strong>{user?.name || 'ተጠቃሚ'}</strong></p>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '15px 0' }}><Link to="/catalog" style={{ color: '#fff', textDecoration: 'none' }}>🛍 ምርቶች</Link></li>
        <li style={{ margin: '15px 0' }}><Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>🛒 የዕቃ መያዣ</Link></li>
        <li style={{ margin: '15px 0' }}><Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>👤 ፕሮፋይል</Link></li>
        {user?.role === 'admin' && (
          <li style={{ margin: '15px 0' }}><Link to="/admin" style={{ color: '#ffcc00', textDecoration: 'none' }}>👑 አድሚን ዳሽቦርድ</Link></li>
        )}
      </ul>
      <button onClick={handleLogout} style={{ marginTop: '50px', background: '#e74c3c', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', width: '100%' }}>
        ውጣ (Logout)
      </button>
    </div>
  );
};

export default Sidebar;