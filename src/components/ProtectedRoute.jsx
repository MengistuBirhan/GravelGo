import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center p-10">በመጫን ላይ...</div>;

  if (!user) {
    // ተጠቃሚው ካልገባ ወደ ሎግይን ገጽ ይወስደዋል
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    // አድሚን ካልሆነና ወደ አድሚን ገጽ መግባት ከፈለገ ወደ ሆም ገጽ ይመልሰዋል
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;