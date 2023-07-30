import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import api from './api';
import LoginForm from './components/Auth/LoginForm';
import CreateAccountForm from './components/Auth/CreateAccountForm';
import Home from './components/Home';
import LogoutButton from './components/Auth/LogoutButton';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar si el usuario ya tiene un token válido almacenado en el almacenamiento local
  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await api.get('/verify', {
          headers: { Authorization: token },
        });
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Ejecutar la verificación de autenticación al cargar la aplicación
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <LogoutButton setIsLoggedIn={setIsLoggedIn} />
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/login">Iniciar sesión</a>
                </li>
                <li>
                  <a href="/create">Crear cuenta</a>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/create" element={<CreateAccountForm />} />
          <Route path="/home" element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} /> : <Navigate to="/login" />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
