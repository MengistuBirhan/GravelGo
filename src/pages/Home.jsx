import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero.jpg") no-repeat center center/cover', color: 'white', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: 'bold' }}>ጥራታቸውን የጠበቁ የግንባታ እቃዎች</h1>
      <p style={{ fontSize: '20px', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
        አሸዋ፣ ጠጠር፣ ሲሚንቶ እና ሌሎች ጥሬ ዕቃዎችን ያሉበት ቦታ ሆነው በጥራት እና በታማኝነት ይዘዙ። ፈጣን ማድረስ ቀዳሚ ተግባራችን ነው።
      </p>
      <button 
        onClick={() => navigate('/catalog')} 
        style={{ background: '#f39c12', color: 'white', border: 'none', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', borderRadius: '30px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(243, 156, 18, 0.4)', transition: '0.3s' }}
      >
        ምርቶችን እይ (ወደ ካታሎግ)
      </button>
    </div>
  );
};

export default Home;