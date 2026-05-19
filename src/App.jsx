import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. መዋቅራዊ አካላት (Layout Components)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. አዳዲስ እና የቆዩ ገጾች (Pages)
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import OrderForm from './pages/OrderForm';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import PaymentSuccess from './pages/PaymentSuccess';
import NotFound from './pages/NotFound';

// 3. የዳታ እና የሎጊን ቁጥጥር (Context & Hooks)
import { CartProvider } from './context/CartContext';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <CartProvider>
      <Router>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* የላይኛው ማውጫ (Navbar) - በሁሉም ገጾች ላይ እንዲታይ */}
          <Navbar user={user} isAuthenticated={isAuthenticated} logout={logout} />

          {/* ዋናው የገጾች ይዘት መግቢያ (Main Content Area) */}
          <main style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
            <Routes>
              {/* መደበኛ ገጾች (Public Routes) */}
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* የካርት እና ትዕዛዝ ገጾች (Cart & Order Routes) */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-form" element={<OrderForm />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />

              {/* የተጠቃሚ ፕሮፋይል ገጽ */}
              <Route path="/profile" element={<Profile user={user} logout={logout} />} />

              {/* የአድሚን ገጽ (Admin-Only Route) */}
              {/* ተጠቃሚው አድሚን ካልሆነ በቀጥታ ወደ ሆም (Home) ይመልሰዋል */}
              <Route 
                path="/admin" 
                element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" replace />} 
              />

              {/* የሌለ ገጽ ሲመረጥ (404 Not Found) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* የግርጌ ማውጫ (Footer) - በሁሉም ገጾች ላይ እንዲታይ */}
          <Footer />
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;