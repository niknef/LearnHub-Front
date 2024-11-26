import React, { useState, useEffect } from 'react';
import CategoriasTable from './CategoriasTable';
import { useNavigate } from 'react-router-dom';
import * as serviceCategorias from '../../services/categorias.service';

const AdminCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        serviceCategorias.getCategorias().then((data) => setCategorias(data));
    }, []);

    const handleEdit = (categoria) => {
        console.log("Editar categoría", categoria);
        // Lógica para editar categoría
    };

    const handleDelete = (id) => {
        console.log("Eliminar categoría", id);
        // Lógica para eliminar categoría
    };

    const handleAdd = () => {
        console.log("Agregar nueva categoría");
        // Lógica para agregar una categoría
    };

    return (
        <div className="container my-5">
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
