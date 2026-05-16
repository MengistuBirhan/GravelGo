import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // በLocalStorage ውስጥ የተቀመጠ ተጠቃሚ ካለ መኖሩን ያረጋግጣል
    const storedUser = localStorage.getItem('gravelgo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // የሎግይን ፈንክሽን (ለሙከራ ያህል - በኋላ ከባክኤንድ ጋር ይገናኛል)
  const login = (email, password) => {
    setLoading(true);
    // ናሙና ተጠቃሚ (Email: admin@test.com ከሆነ አድሚን ይሆናል)
    const isAdmin = email === 'admin@test.com';
    const userData = { email, token: 'fake-jwt-token', role: isAdmin ? 'admin' : 'user' };
    
    setUser(userData);
    localStorage.setItem('gravelgo_user', JSON.stringify(userData));
    setLoading(false);
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gravelgo_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);