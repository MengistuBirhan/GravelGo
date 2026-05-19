import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
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

// Context & Hooks
import { CartProvider } from './context/CartContext';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <CartProvider>
      <Router>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* Navbar - በሁሉም ገጾች */}
          <Navbar user={user} isAuthenticated={isAuthenticated} logout={logout} />

          {/* Main Content Area */}
          <main style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />

              {/* Login/Register with Redirect if already authenticated */}
              <Route
                path="/login"
                element={isAuthenticated ? <Navigate to="/profile" replace /> : <Login />}
              />
              <Route
                path="/register"
                element={isAuthenticated ? <Navigate to="/profile" replace /> : <Register />}
              />

              {/* Cart & Order Routes */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-form" element={<OrderForm />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />

              {/* Profile Route */}
              <Route
                path="/profile"
                element={isAuthenticated ? <Profile user={user} logout={logout} /> : <Navigate to="/login" replace />}
              />

              {/* Admin Only Route */}
              <Route
                path="/admin"
                element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" replace />}
              />

              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;