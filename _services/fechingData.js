

export async function fechingData(id){
    const url = `${process.env.NEXT_PUBLIC_API_URL}/${id}`;
    
    const response = await fetch(url);
    //retonando respuesta
    return await response.json();

}