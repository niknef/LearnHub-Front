import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as serviceCurso from '../../services/cursos.service';

const DetalleCurso = () => {
    const [curso, setCurso] = useState(null); // Estado inicial nulo
    const { id } = useParams(); // Obtener el ID del curso desde la URL

    // Función para capitalizar la primera letra
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                const data = await serviceCurso.getCurso(id); // Llamar al servicio para obtener el curso
                setCurso(data);
            } catch (error) {
                console.error('Error al obtener el curso:', error);
            }
        };

        fetchCurso();
    }, [id]); // Solo se ejecuta cuando cambia el ID

    if (!curso) {
        return <div>Cargando datos del curso...</div>; // Mostrar mensaje mientras se carga el curso
    }

     return (
        <div className="container my-5">
            <div className="card mx-auto shadow-lg" style={{ maxWidth: '900px' }}>
                {/* Imagen del curso */}
                <img 
                    src={`/img/${curso.img}`} 
                    alt={curso.nombre} 
                    className="card-img-top" 
                    style={{ objectFit: 'cover' }} 
                />
                <div className="card-body text-center">
                    {/* Nombre y descripción */}
                    <h2 className="card-title fw-light">{capitalize(curso.nombre)}</h2>
                    <p className="card-text text-muted ">{curso.descripcion}</p>
                    
                    {/* Información adicional */}
                    <div className="row mt-4">
                        <div className="col-md-6 mb-3">
                            <h3 className='text-custom'><strong>Categoría:</strong></h3>
                            <p>{capitalize(curso.categoria)}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h3 className='text-custom'><strong>Duración:</strong></h3>
                            <p><i className="bi bi-clock"></i> {curso.horas} horas</p>
                        </div>
                    </div>
                    
                    {/* Tecnologías */}
                    <div className="mb-4">
                        <h3 className='text-custom'><strong>Tecnologías:</strong></h3>
                        <ul className="list-inline">
                            {curso.tecnologias.map((tec, index) => (
                                <li 
                                    key={index} 
                                    className="list-inline-item badge bg-secondary me-2"
                                >
                                    {capitalize(tec)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Información del profesor */}
                    <div className="d-flex align-items-center bg-light p-4 rounded">
                        <img 
                            src={`/img/${curso.profesor.foto}`} 
                            alt={`${capitalize(curso.profesor.user.nombre)} ${capitalize(curso.profesor.user.apellido)}`} 
                            className="rounded-circle me-3" 
                            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                        />
                        <div>
                            <h2 className="mb-1">
                                {capitalize(curso.profesor.user.nombre)} {capitalize(curso.profesor.user.apellido)}
                            </h2>
                            <p className="text-muted mb-0">{curso.profesor.bio}</p>
                            <p className="text-muted"><strong>Email:</strong> {curso.profesor.user.mail}</p>
                        </div>
                    </div>

                    {/* Botón para el curso */}
                    <div className="text-center mt-4">
                        <a 
                            href={curso.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn boton-custom btn-lg mb-4"
                        >
                            Repositorio
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleCurso;