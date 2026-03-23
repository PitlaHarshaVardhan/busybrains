import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const OAuth2RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      try {
        const decoded = jwtDecode(token);
        const userData = { token, email: decoded.sub, role: decoded.role };
        localStorage.setItem('user', JSON.stringify(userData));
        login(userData);
      } catch (e) {
        console.error("Invalid token parsing");
      }
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [location, navigate, login]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>
      <h2>Logging you in...</h2>
    </div>
  );
};

export default OAuth2RedirectHandler;
