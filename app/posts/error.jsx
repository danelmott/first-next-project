"use client"

import styles from "../../_style/error.module.css";

export default function Error({ error, reset }) {
    if (error) console.error(error);

    return (
        <main className={styles.container}>
            <div className={styles.card} role="alert">
                <div className={styles.orb} aria-hidden="true" />
                <h1 className={styles.title}>Algo salió mal</h1>
                <p className={styles.desc}>{error?.message ?? 'Ocurrió un error inesperado.'}</p>
                <div className={styles.actions}>
                    <button className={styles.btn} onClick={() => reset && reset()}>Reintentar</button>
                </div>
            </div>
        </main>
    );
}