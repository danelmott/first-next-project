"use client"
import { useState, useEffect} from "react";
import styles from '@/_style/postPage.module.css';
import Link from "next/link";
import { useAuth } from "@/_context/authContext";
import { useRouter } from "next/navigation";
import { fechingData } from "@/_services/fechingData.js";



export default function PostPage({params}){
    const [user, setUser] = useState({});
    const {isLogged} = useAuth();
    const router = useRouter();
    
    //EFECTO PARA CARGAR LOS DATOS
    useEffect(()=>{
        //FUNCION PARA HACER FECHING DE LOS DATOS
        
        async function loadData(){
            const {id} = await  params;
            
            const data = await fechingData(id);
            setUser(data)
        }
        
        loadData();
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
