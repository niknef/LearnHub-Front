import React from 'react';
import { Link } from 'react-router-dom';
import { useToken } from "../../contexts/session.context";
import { jwtDecode } from "jwt-decode";



const NavBar = () => {
    const token = useToken();
    let isAdmin = false;

    // Decodificar el token para obtener el rol
    if (token) {
        try {
            const decoded = jwtDecode(token); // Usamos jwtDecode
            isAdmin = decoded.role === 'profesor';
        } catch (error) {
            console.error('Error decodificando el token:', error);
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo a la izquierda */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img 
                        src="/img/logo-learnhub.png" 
                        alt="LearnHub Logo" 
                        style={{ height: '40px' }} 
                    />
                    <h1 className="ms-2 mb-0 fs-4 title-custom">LearnHub</h1>
                </Link>
                {/* Botón toggle para dispositivos pequeños */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Menú de navegación alineado a la derecha */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            !token
                                ? <>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/login">Login</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/register">Register</Link>
                                    </li>
                                </>
                                : <>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/">Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/tecnologias">Tecnologías</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/categorias">Categorías</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/profesores">Profesores</Link>
                                    </li>
                                    {/* Botón de Admin visible solo para profesores */}
                                    {isAdmin && (
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/admin">
                                                Admin
                                            </Link>
                                        </li>
                                    )}
                                    <li className='nav-item'>
                                        <Link className='nav-link d-flex align-items-center boton-custom' to="/logout">
                                            Logout 
                                            <i className="bi bi-box-arrow-right ms-2"></i>
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
