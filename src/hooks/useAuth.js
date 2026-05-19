import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // በ localStorage ውስጥ የተቀመጠ ተጠቃሚ ካለ መፈለግ
    const storedUser = localStorage.getItem('gravelgo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  } , []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('gravelgo_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gravelgo_user');
  };

  return { user, loading, login, logout, isAuthenticated: !!user };
};