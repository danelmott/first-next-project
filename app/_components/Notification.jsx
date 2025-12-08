'use client';
import { useEffect, useState } from 'react';
import styles from '../_style/Notification.module.css';

export default function Notification({
        title,
        message,
        duration,
        onClose = () => {},
    }) {
        const [visible, setVisible] = useState(true);
        const [leaving, setLeaving] = useState(false);

        useEffect(() => {
            if (!duration || duration <= 0) return;
            const timer = setTimeout(() => setLeaving(true), duration);
            return () => clearTimeout(timer);
        }, [duration]);

        useEffect(() => {
            if (!leaving) return;
            const t = setTimeout(() => {
                setVisible(false);
                onClose();
            }, 260);
            return () => clearTimeout(t);
        }, [leaving, onClose]);

        if (!visible) return null;

        return (
            <div className={`${styles.notification} ${leaving ? styles.hide : ''}`}>
                <div className={styles.iconWrapper}>
                    <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.message}>{message}</p>
                </div>
                <button
                    className={styles.close}
                    aria-label="Cerrar"
                    onClick={() => setLeaving(true)}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        );
    };