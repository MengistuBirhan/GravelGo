import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ተጠቃሚ መረጃን localStorage ከ register ያገኘ
    const storedUser = JSON.parse(localStorage.getItem('gravelgo_user'));

    if (storedUser && storedUser.phone === phone && storedUser.password === password) {
      alert('Login ተሳክቷል!');
      navigate('/profile'); // ለ profile ማውጫ
    } else {
      alert('Phone ወይም Password ትክክል አይደለም!');
    }
  };

  return (
    <div style={{
      maxWidth: '400px', margin: '50px auto', padding: '30px',
      border: '1px solid #ccc', borderRadius: '12px', backgroundColor: '#fff',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />

        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#ff8c00',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
      </form>

      <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px', color: '#555' }}>
        አዲስ ነዎት?{' '}
        <Link to="/register" style={{ color: '#ff8c00', fontWeight: 'bold', textDecoration: 'none' }}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;