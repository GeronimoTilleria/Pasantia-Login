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
        <div className='container-fluid d-flex align-items-center justify-content-center container-main'>
            <div className='bg-light p-5 rounded'>
                <h2 className='text-center mb-4'>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="username">Nombre de usuario</label>
                        <input className='form-control' type="text" id="username" name="username" onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label className='form-label' htmlFor="password">Contraseña</label>
                        <input className='form-control' type="password" id="password" name="password" onChange={handleChange} />
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button className='btn btn-primary' type="submit">Iniciar sesión</button>
                        </div>
                    </div>
                    
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>

    )
}

export default LoginForm
