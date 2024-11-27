import React, { useState, useEffect } from 'react';
import CategoriasTable from './CategoriasTable';
import { useNavigate } from 'react-router-dom';
import * as serviceCategorias from '../../services/categorias.service';
import Notification from '../Notificaciones/Notification';
import { useLocation } from 'react-router-dom';

const AdminCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const location = useLocation();
    const [notification, setNotification] = useState(location.state?.notification || null);
    const navigate = useNavigate();

    useEffect(() => {
        serviceCategorias.getCategorias()
            .then((data) => setCategorias(data))
            .catch((error) => console.error(error));
    }, []);

    const handleEdit = (categoria) => {
        console.log("Editar categoría", categoria);
        // Lógica para editar categoría
    };

    const handleDelete = (id) => {
        navigate(`/admin/categorias/delete/${id}`); // Redirigir a la vista de confirmación
    };

    const handleAdd = () => {
        console.log("Agregar nueva categoría");
        // Lógica para agregar una categoría
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
            <h2 className="text-center mb-4 text-custom">Administrar Categorías</h2>

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
                    <i className="bi bi-plus-circle me-2"></i> Agregar Nueva Categoría
                </button>
            </div>

            {/* Tabla */}
            <CategoriasTable 
                data={categorias} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
        </div>
    );
};

export default AdminCategorias;
