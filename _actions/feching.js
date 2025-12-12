"use server"


export async function Feching(){
    
    const peticion = await fetch(process.env.NEXT_PUBLIC_API_URL,{next: {revalidate: 3600}})
    const response = await peticion.json()
    
    //retorno de la funcion
    return response
}

