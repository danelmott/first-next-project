

export async function fechingData(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //retonando respuesta
    return await response.json();

}