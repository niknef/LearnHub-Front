import React, { useState, useEffect } from 'react';
import TecnologiasTable from './TecnologiasTable';
import { useNavigate } from 'react-router-dom';
import * as serviceTecnologias from '../../services/tecnologias.service';

const AdminTecnologias = () => {
    const [tecnologias, setTecnologias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        serviceTecnologias.getTecnologias().then((data) => setTecnologias(data));
    }, []);

    const handleEdit = (tecnologia) => {
        console.log("Editar tecnología", tecnologia);
        // Lógica para editar tecnología
    };

    const handleDelete = (id) => {
        console.log("Eliminar tecnología", id);
        // Lógica para eliminar tecnología
    };

    const handleAdd = () => {
        console.log("Agregar nueva tecnología");
        // Lógica para agregar una tecnología
    };

    return (
        <div className="container my-5">
            {/* Título */}
            <h2 className="text-center mb-4 text-custom">Administrar Tecnologías</h2>

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
                    <i className="bi bi-plus-circle me-2"></i> Agregar Nueva Tecnología
                </button>
            </div>

            {/* Tabla */}
            <TecnologiasTable 
                data={tecnologias} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
        </div>
    );
};

export default AdminTecnologias;