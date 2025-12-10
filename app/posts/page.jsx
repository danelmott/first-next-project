"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/_context/authContext";
import { useState, useEffect } from "react";
import styles from "@/_style/PostSearch.module.css";

export default function PostsSearch(){
    const [ID, setID] = useState("");
    const router = useRouter();
    const {isLogged, logout} = useAuth()
    
    //FUNCION PARA REDIRECCIONAR PAGINA
    function handlerSubmit(e){
        e.preventDefault();
        router.push(`/posts/${ID}`)
    }

    //EFECTO PARA COMPROBAR SI SE ESTA LOGEADO O NO
    useEffect(()=>{
        if(!isLogged){
            router.replace("/")
        }
    },[isLogged])
    
    if(!isLogged){
        return null
    }
    
    return(
        <div className={styles.container}>
        <form className={styles.form} onSubmit={handlerSubmit}>
            <h2 className={styles.title}>Ingresa el ID del elemento</h2>
            <input type="number" placeholder="Ingresa el ID" value={ID} onChange={e => setID(e.target.value)} className={styles.input} />
            <button type="submit" className={styles.submit}>Ingresar</button>
        </form>
        <button className={styles.logoutBtn} onClick={logout}>Logout</button>
        </div>
    )
}