import { call } from "./api.service"

export async function getCursos(){
    return call( { uri: "cursos" } )
}

export async function getCurso( id ){
    return call( { uri: `cursos/${id}` } )
}