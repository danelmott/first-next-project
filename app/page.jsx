"use client";
import { useAuth } from "./_context/authContext.jsx";
import { useRouter } from "next/navigation";

export default function  Login(){
    const {isLogged, login} = useAuth()
    const router = useRouter();
    
    //funcion para logear usuarios
    function handleSubmit(e){
        e.preventDefault();
        
        login();
        
        //despues de registrarse se redirecionan aqui
        router.push("/content");
    }

    //si el usuario ya esta logeado se redireciona a esa ruta
    if(isLogged){
        router.replace("/content");
    }

    return(
        <form onSubmit={handleSubmit}>
        <h2>Iniciar session</h2>
        
        <div>
            <input type="text"  placeholder="usuario" required/>
            <input type="password" placeholder="contraseña" required/>
        </div>

        <button type="submit">entrar</button>
        </form>
    );

}