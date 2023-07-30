import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const CreateAccountForm = () => {

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await api.post('/register', formData);
            setSuccessMessage('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
            setFormData({ username: '', password: '' });
            navigate('/login');
        } catch (error) {
            setErrorMessage('El nombre de usuario ya existe. Por favor, elige otro nombre.');
        }
    };

    return (
        <div>
            <h2>Crear cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" onChange={handleChange} />
                </div>
                <div>   
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Crear cuenta</button>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    )
}

export default CreateAccountForm
