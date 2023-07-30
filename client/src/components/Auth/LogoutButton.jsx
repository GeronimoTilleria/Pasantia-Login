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
        <button className='btn btn-warning me-4' onClick={handleLogout}>Cerrar sesión</button>
    )
}

export default LogoutButton
