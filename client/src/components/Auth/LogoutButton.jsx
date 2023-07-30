import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };
    return (
        <button onClick={handleLogout}>Cerrar sesión</button>
    )
}

export default LogoutButton
