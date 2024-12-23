import { call } from "./api.service"

export async function getCategorias(){
    return call( { uri: "categorias" } )
}

export async function getCategoria( id ){
    return call( { uri: `categorias/${id}` } )
}

export async function eliminarCategoria(id) {
    return call({
        uri: `categorias/${id}`,
        method: "DELETE"
    });
}