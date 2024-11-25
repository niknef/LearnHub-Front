import React,{ useEffect, useState } from 'react'
import ListadoCursos from '../components/Cursos/ListadoCursos'
import * as serviceCursos from '../services/cursos.service'
const Home = () => {
    const [cursos, setCursos] = useState([])

    useEffect( () => {
        serviceCursos.getCursos()
        .then( cursos => {
            setCursos(cursos)
        })
    },[] )

    return (
        <ListadoCursos listado={cursos} />
    )
}

export default Home