import { call } from "./api.service"

export async function login({ email, password }){
    return call( { uri: "usuarios/login", method: "POST", body: { "email": email, "password": password } } )
}

export async function register({ nombre, apellido, age, role, email, password, confirmPassword }){
    return call( { uri: "usuarios", method: "POST", body: { "nombre": nombre, "apellido": apellido, "email": email, "password": password, "passwordConfirm": confirmPassword, "age": age, "role": role} } )
}
