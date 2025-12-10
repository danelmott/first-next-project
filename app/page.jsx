'use client'
import styles from '@/_style/LoginSection.module.css'
import { useAuth } from '@/_context/authContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



export default function LoginForm() {
    const {usuario, setUsuario} = useState("");
    const {contraseña, setContraseña} = useState("");
    
    const user = {
        usuario: usuario,
        contraseña: contraseña
    }
    
    const {isLogged, login} = useAuth()
    const router = useRouter();
    
    //EFECTO DE REDIRECION POR SI EL USUARIO YA ESTA LOGEADO
    //NO TENGA QUE VOLVER A SECCION DE LOGIN
    useEffect(()=>{
        if(isLogged){
            router.replace("/content");
        }
    },[])
    
    //FUNCION PARA LOGEAR USUARIOS
    function handlerSubmit(e){
        e.preventDefault();
        
        login(user);
        
        router.replace("/posts");
    }
    
    return (
        <form className={styles.loginForm} onSubmit={handlerSubmit}>
            <h2 className={styles.loginTitle}>Iniciar sesión</h2>
            
            <div className={styles.field}>
                <label htmlFor="userName" className={styles.label}>Usuario</label>
                <input
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    id="UserName"
                    name="userName"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="userName"
                />
            </div>
            
            <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={styles.input}
                    placeholder="••••••••"
                />
            </div>
            
            <button type="submit" className={styles.submit}>Entrar</button>
        </form>
);}
