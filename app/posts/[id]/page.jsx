"use client"
import { useState, useEffect} from "react";
import styles from '@/_style/postPage.module.css';
import Link from "next/link";
import { useAuth } from "@/_context/authContext";
import { useRouter } from "next/navigation";


export default function PostPage({params}){
    const [user, setUser] = useState({});
    const {isLogged, logout} = useAuth();
    const router = useRouter();
    

    //EFECTO PARA CARGAR LOS DATOS
    useEffect(()=>{
        //FUNCION PARA HACER FECHING DE LOS DATOS
        async function handleFetch(){
            const {id} = await params;
            const peticion = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const response = await peticion.json();
            setUser(response);
        }
        handleFetch();
    },[params])
    
    //EFECTO PARA VERIFICAR SI EL USUARIO ESTA LOGEADO O NO
    useEffect(()=>{
        if(!isLogged){
        router.replace("/");
    }
    },[isLogged]);
    
    if(!isLogged){
        return null
    }
    
    return(
        <div className={styles.page}>
            <article className={styles.card}>
                <h2 className={styles.meta}>id: <span className={styles.metaValue}>{user.id}</span></h2>
                <h2 className={styles.title}>title: <span className={styles.titleValue}>{user.title}</span></h2>
                <div className={styles.body}>
                    <p>{user.body}</p>
                </div>
                
                <div className={styles.footer}>
                    <Link
                        className={styles.linkBtn}
                        href={"/posts"}
                    >
                        Regresar
                    </Link>
                </div>
            </article>
        </div>
    );
}
