"use client";
import { useNotification } from "../../_hooks/useNotification.js";
import Notification from "../../_components/Notification.jsx";
import style from  '@/_style/about.module.css';
import Link from "next/link";
import { useAuth } from "@/_context/authContext.jsx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function About(){
    const {isLogged, logout} = useAuth();
    const router = useRouter();

    //HOOK PERSONALIZADO PARA LAS NOTIFIACIONES
    const {state,
        handlerClickFalse,
        handlerClickTrue,
        handlerClickNull} = useNotification()

    //EFECTO PARA VERFICAR SI ESTA LOGEADO O NO    
    useEffect(()=>{
        if(!isLogged){
            router.push("/")
        }
    },[isLogged])
    
    if(!isLogged){
        return null
    }
    
    return(
        <>
        {/*notificacion*/}
        {state !==null && <Notification title={state ? "gracias": "calla puta"}
        message={state ? "es mi primera pagina bro": "aprendere luego zorra"}
        onClose={handlerClickNull} duration={3000}/>}
        
        <div className={style.aboutContainer}>
            <h2>bienvenido a la pagina de about us</h2>
            <h4>¿que tal te parece?</h4>
            <div className={style.buttonContainer}>
                <button onClick={handlerClickTrue} className={style.button}>bonita</button>
                <button onClick={handlerClickFalse} className={style.button} >es una mierda</button>
            </div>
            <Link href={"/content"}>
            regresar a la pagina prinicipal</Link>
        </div>
        //button para hacer logout
        <button className={style.button} onClick={logout}>logout</button>
        </>
    )
}