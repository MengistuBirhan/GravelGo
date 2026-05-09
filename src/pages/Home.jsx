import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>GravelGo</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 20px' }}>
          ጥራት ያለው ጠጠር፣ አሸዋ እና ድንጋይ ካሉበት ቦታ ሆነው ይዘዙ። ለግንባታዎ አስተማማኝ አጋር!
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/catalog">
            <button style={{
              padding: '12px 25px', 
              background: 'orange', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              ምርቶችን እይ
            </button>
          </Link>
          <Link to="/order">
            <button style={{
              padding: '12px 25px', 
              background: 'white', 
              color: 'black', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              አሁኑኑ እዘዝ
            </button>
          </Link>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center', background: '#f9f9f9' }}>
        <h2 style={{ marginBottom: '30px' }}>ለምን እኛን ይመርጣሉ?</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '20px', background: 'white', borderRadius: '8px', shadow: 'sm' }}>
            <h3 style={{ color: 'orange' }}>ፈጣን ማድረስ</h3>
            <p>ያዘዙትን ምርት ባሉበት ቦታ በፍጥነት እናደርሳለን።</p>
          </div>
          <div style={{ padding: '20px', background: 'white', borderRadius: '8px', shadow: 'sm' }}>
            <h3 style={{ color: 'orange' }}>ጥራት ያለው ምርት</h3>
            <p>ለግንባታዎ ተስማሚ የሆኑ ደረጃቸውን የጠበቁ ግብዓቶች።</p>
          </div>
          <div style={{ padding: '20px', background: 'white', borderRadius: '8px', shadow: 'sm' }}>
            <h3 style={{ color: 'orange' }}>ተመጣጣኝ ዋጋ</h3>
            <p>ከገበያ ባነሰ ዋጋ ጥራት ያለው አገልግሎት።</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;