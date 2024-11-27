import { call } from "./api.service"

export async function getTecnologias(){
    return call( { uri: "tecnologias" } )
}

export async function getTecnologia( id ){
    return call( { uri: `tecnologias/${id}` } )
}

export async function eliminarTecnologia(id) {
    return call({
        uri: `tecnologias/${id}`,
        method: "DELETE"
    });
}