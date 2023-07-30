import React from 'react'

const Home = ({ isLoggedIn }) => {
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center container-main'>
            <div>
                <h2>Bienvenido a la página de inicio</h2>
                {isLoggedIn && <p className='text-center'>¡Has iniciado sesión correctamente!</p>}
            </div>
        </div>

    )
}

export default Home
