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
        <div className='container-fluid d-flex align-items-center justify-content-center container-main'>
            <div className='bg-light p-5 rounded'>
                <h2 className='text-center mb-4'>Crear cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="username">Nombre de usuario</label>
                        <input className='form-control' type="text" id="username" name="username" onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label className='form-label' htmlFor="password">Contraseña</label>
                        <input className='form-control' type="password" id="password" name="password" onChange={handleChange} />
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <button className='btn btn-success' type="submit">Crear cuenta</button>
                        </div>
                    </div>

                    {successMessage && <p>{successMessage}</p>}
                    {errorMessage && <p>{errorMessage}</p>}
                </form>
            </div>

        </div>
    )
}

export default CreateAccountForm
