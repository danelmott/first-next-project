'use client'
import Link from 'next/link.js';
import { useNotification } from '../_hooks/useNotification.js';
import Notification from '../_components/Notification.jsx';
import style from '../_style/HomePage.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/_context/authContext.jsx"



export default function HomePage(){
    
    const {isLogged, logout} = useAuth();
    const router = useRouter();
    
    //efecto para verificar si el usuario esta logeado
    useEffect(()=>{
        if(!isLogged){
            router.replace("/");
        }
        
    },[isLogged]);
    
    
    //HOOK PERSONALIZADO PARA MOSTRAR NOTIFICACIONES 
    const {
        state,
        handlerClickTrue,
        handlerClickFalse,
        handlerClickNull} =  useNotification();
    
    if(!isLogged){
        return null;
    }

    return(
        <>
        {/*notificacion*/}
        {state !==null && <Notification title={state ? "gracias": "calla puta"}
        message={state ? "es mi primera pagina bro": "aprendere luego zorra"}
        onClose={handlerClickNull} duration={3000}/>}
        
        <div className={style.homeContainer}>
            <div className={style.homeSection} >
                <h2>Esta es mi primera pagina con nextJs</h2>
                    <h4>¿Que tal te parece?</h4>
                    <div className={style.buttonContainer}>
                        <button className={style.buttonTrue} onClick={handlerClickTrue}>Esta bonita</button>
                        <button className={style.button} onClick={handlerClickFalse}>eres una mierdota</button>
                    </div>
            </div>
            <Link href={"/about"}>ir a about</Link>
        </div>

        //boton para hacer logout
        <button className={style.buttonTrue} onClick={logout}>Logout</button>
        </>
    );
}