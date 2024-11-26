import React, { useState, useEffect } from 'react';
import CursosTable from './CursosTable';
import { useNavigate } from 'react-router-dom';
import * as serviceCursos from '../../services/cursos.service';
import { jwtDecode } from "jwt-decode";

const AdminCursos = () => {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Extraer el profesorId del JWT
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No se encontró el token");
            navigate("/login"); // Redirigir al login si no hay token
            return;
        }

        try {
            const decoded = jwtDecode(token);
            console.log(decoded);
            const profesorId = decoded.profesorId

            // Llamar al servicio con el profesorId
            serviceCursos.getCursosPorProfesor(profesorId)
                .then((cursos) => setCursos(cursos))
                .catch((error) => console.error(error));
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            navigate("/login"); // Redirigir al login si el token es inválido
        }
    }, [navigate]);

    const handleEdit = (curso) => {
        console.log("Editar curso", curso);
        // Lógica para editar curso
    };

    const handleDelete = (id) => {
        console.log("Eliminar curso", id);
        // Lógica para eliminar curso
    };

    const handleAdd = () => {
        console.log("Agregar nuevo curso");
        // Lógica para agregar un curso
    };

    return (
        <div className="container my-5">
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
