import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, phone, password, role: 'customer' };
    localStorage.setItem('gravelgo_user', JSON.stringify(userData));
    alert('Registration ተሳክቷል! Login ያድርጉ');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ padding: '12px', backgroundColor: '#ff8c00', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Register</button>
      </form>
    </div>
  );
}

export default Register;