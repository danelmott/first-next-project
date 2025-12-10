


export default async  function PostPage({params}){
    const {id} = await params;
    const peticion = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await peticion.json();
    console.log(response)
    console.log(id)
    return(
        <div>
            <h2>id: {response.id}</h2>
            <h2>title: {response.title}</h2>
            <h2>body: {response.body}</h2>
        </div>
    );
}
