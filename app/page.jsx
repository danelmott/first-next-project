'use client'
import styles from '@/_style/LoginSection.module.css'
import {  useState } from 'react';
import { CreatePost } from '@/_actions/firstAction';

export default function LoginForm() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    
    return (
        <form className={styles.loginForm}  action={CreatePost}>
            <h2 className={styles.loginTitle}>Iniciar sesión</h2>
            
            <div className={styles.field}>
                <label htmlFor="userName" className={styles.label}>Usuario</label>
                <input
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    id="UserName"
                    name="nombre"
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
                    name="contraseña"
                    type="password"
                    required
                    className={styles.input}
                    placeholder="••••••••"
                />
            </div>
            
            <button type="submit" className={styles.submit}>Entrar</button>
        </form>
);}
