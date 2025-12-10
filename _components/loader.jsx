import styles from './Loader.module.css';

export default function Loader({ fullScreen = true }) {
  if (fullScreen) {
    return (
      <div className={styles.fullScreenContainer}>
        <div className={styles.loaderWrapper}>
          <div className={styles.spinner}></div>
          <p className={styles.text}>Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Cargando...</p>
    </div>
  );
}
