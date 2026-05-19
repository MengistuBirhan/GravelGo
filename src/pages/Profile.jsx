import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('gravelgo_logged_in');
    if (loggedIn !== 'true') {
      navigate('/login'); // ከ login ሳይገባ ከ profile ገጽ ወደ login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('gravelgo_logged_in');
    navigate('/login'); // logout ከፈተ ወደ login ይመለስ
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '12px' }}>
      <h2>Profile Page</h2>
      <p>እንኳን ደህና መጡ!</p>
      <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#ff8c00', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;