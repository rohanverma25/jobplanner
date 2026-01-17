// src/PrivateRoute.jsx
import React from 'react';
import { useAuth } from './authContext';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <div style={{ padding: "3rem", textAlign: "center", color: "#aaa" }}>Please log in to access your dashboard.</div>;
  }
  return children;
}
