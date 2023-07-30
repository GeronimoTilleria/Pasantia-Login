import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const LoginForm = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('/login', formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setIsLoggedIn(true);
            navigate('/home');
        } catch (error) {
            setError('Usuario o contraseña incorrectos');
        }
    };
    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default LoginForm
