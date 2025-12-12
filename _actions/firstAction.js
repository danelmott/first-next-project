"use server";

export async function CreatePost(FormData) {
    const nombre = FormData.get("nombre");
    const constraseña = FormData.get("contraseña");
    const user = {
        nombre,
        constraseña
    }
    console.log(user);
}