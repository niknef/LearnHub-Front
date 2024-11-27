import React, { useState, useEffect } from 'react';
import CursosTable from './CursosTable';
import { useNavigate } from 'react-router-dom';
import * as serviceCursos from '../../services/cursos.service';
import { jwtDecode } from 'jwt-decode';
import Notification from '../Notificaciones/Notification';
import { useLocation } from 'react-router-dom';

const AdminCursos = () => {
    const [cursos, setCursos] = useState([]);
    const location = useLocation();
    const [notification, setNotification] = useState(location.state?.notification || null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No se encontró el token");
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const profesorId = decoded.profesorId;

            serviceCursos.getCursosPorProfesor(profesorId)
                .then((cursos) => setCursos(cursos))
                .catch((error) => console.error(error));
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            navigate("/login");
        }
    }, [navigate]);

    const handleEdit = (curso) => {
        console.log("Editar curso", curso);
        // Lógica para editar curso
    };

    const handleAdd = () => {
        navigate('/admin/cursos/new'); // Redirigir a la vista de creación de curso
    };

    const handleDelete = async (id) => {
        navigate(`/admin/cursos/eliminar/${id}`); // Redirigir a la vista de confirmación
    };

    return (
        <div className="container my-5">
            {/* Notificación */}
            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                    onClose={() => setNotification(null)}
                />
            )}

            {/* Título */}
            <h2 className="text-center mb-4 text-custom">Administrar Cursos</h2>

            {/* Botones */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button 
                    className="btn btn-outline-secondary d-flex align-items-center"
                    onClick={() => navigate(-1)}
                >
                    <i className="bi bi-arrow-left me-2"></i> Volver
                </button>
                <button 
                    className="btn btn-success d-flex align-items-center"
                    onClick={handleAdd}
                >
                    <i className="bi bi-plus-circle me-2"></i> Agregar Nuevo Curso
                </button>
            </div>

            {/* Tabla */}
            <CursosTable 
                data={cursos} 
                onEdit={handleEdit} 
                onDelete={handleDelete}
            />
        </div>
    );
};

export default AdminCursos;
