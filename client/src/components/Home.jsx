import React from 'react'

const Home = ({ isLoggedIn }) => {
    return (
        <div>
            <h2>Bienvenido a la página de inicio</h2>
            {isLoggedIn && <p>¡Has iniciado sesión correctamente!</p>}
        </div>
    )
}

export default Home
