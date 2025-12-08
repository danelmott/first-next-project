'use client'
import Link from 'next/link.js';
import { useNotification } from './_hooks/useNotification.js';
import Notification from './_components/Notification.jsx';
import style from './_style/HomePage.module.css'

export default function HomePage(){
    //HOOK PERSONALIZADO 
    const {
        state,
        handlerClickTrue,
        handlerClickFalse,
        handlerClickNull} =  useNotification()
    
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
            <Link href={"/about"}>ir hacia about</Link>
        </div>
        </>
    );
}