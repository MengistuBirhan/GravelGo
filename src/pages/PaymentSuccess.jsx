import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', marginTop: '50px' }}>
      <div style={{ fontSize: '70px', color: '#2ecc71' }}>✔</div>
      <h1 style={{ color: '#2c3e50' }}>ክፍያዎ በስኬት ተጠናቋል!</h1>
      <p style={{ color: '#7f8c8d', fontSize: '18px', margin: '20px 0' }}>
        ትዕዛዝዎን በቅልጥፍና እያዘጋጀን ነው። ስላዘዙን እናመሰግናለን!
      </p>
      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={() => navigate('/catalog')} 
          style={{ background: '#3498db', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px', fontSize: '16px' }}
        >
          ወደ ገበያ ተመለስ
        </button>
        <button 
          onClick={() => navigate('/profile')} 
          style={{ background: '#2ecc71', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
        >
          ትዕዛዞችን እይ
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;