import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div style={{ padding: '20px' }}>እባክዎ መጀመሪያ ይግቡ (Login ያድርጉ)።</div>;
  }

  return (
    <div className="profile-container" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>የእኔ ፕሮፋይል (My Profile)</h2>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <p><strong>ስም:</strong> {user.name}</p>
        <p><strong>ኢሜይል:</strong> {user.email}</p>
        <p><strong>ስልክ ቁጥር:</strong> {user.phone || 'ያልተመዘገበ'}</p>
        <p><strong>የአካውንት አይነት:</strong> {user.role === 'admin' ? 'አስተዳዳሪ (Admin)' : 'ደንበኛ (Customer)'}</p>
      </div>
      <button onClick={logout} style={{ marginTop: '20px', background: '#e74c3c', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        ውጣ
      </button>
    </div>
  );
};

export default Profile;